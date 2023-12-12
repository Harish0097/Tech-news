import AppContext from "./AppContext";
import { useState, useEffect } from "react";

const AppProvider = ({ children }) => {

  let API = "https://hn.algolia.com/api/v1/search?"

  const [state, setState] = useState({
    isLoading: true,
    page: 0,
    nbpages: 0,
    query:"html",
    hits:[]
  })

  const fetchApi = async (url) => {
      try {
          const res = await fetch(url)
          const data = await res.json()
          console.log(data)
          setState({
            ...state,
            hits: data.hits,
            nbPages: data.nbPages,
          })    
      } catch (error) {
          console.log("error")
      }
  }

  useEffect(() => {
      fetchApi(`${API}query=${state.query}&page=${state.page}`)
  }, [])

  return (
    <AppContext.Provider value={{ ...state }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;