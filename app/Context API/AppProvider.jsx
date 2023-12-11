import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={"Harish Tech"}>
      {children}
    </AppContext.Provider>
  );
};


export default AppProvider;