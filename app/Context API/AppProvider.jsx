import AppContext from "./AppContext";
import { useState, useEffect } from "react";

const AppProvider = ({ children }) => {

  let API = "https://hn.algolia.com/api/v1/search?"

  const [state, setState] = useState({
    isLoading: true,
    page: 0,
    nbPages: 0,
    query:"html",
    hits:[]
  })

  const fetchApi = async (url) => {
    setState(prevState => ({
      ...prevState,
      isLoading: true,
    }));

    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      setState({
        ...state,
        hits: data.hits,
        nbPages: data.nbPages,
        isLoading: false,
      })    
    } catch (error) {
      console.log("error")
      setState(prevState => ({
        ...prevState,
        isLoading: false,
      }));
    }
  }

  const getNext = () => {
    if (state.page < state.nbPages) {
      setState(prevState => ({
        ...prevState,
        page: prevState.page + 1,
      }));
    }
  }

  const getPrev = () => {
    if (state.page > 0) {
      setState(prevState => ({
        ...prevState,
        page: prevState.page - 1,
      }));
    }
  }

  const searchPost = (query) => {
    setState(prevState => ({
      ...prevState,
      query: query,
      page: 0,
    }));
    fetchApi(`${API}query=${query}&page=${state.page}`);
  };


  const removePost = (currPost) => {
    const newHits = state.hits.filter((post) => post.objectID !== currPost.objectID);
    setState({
      ...state,
      hits: newHits,
    });
  }

  useEffect(() => {
    fetchApi(`${API}query=${state.query}&page=${state.page}`);
  }, [state.page]);

  return (
    <AppContext.Provider value={{ ...state, removePost , searchPost , getNext, getPrev}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;