import React, { useState } from "react";

const MainContext = React.createContext();
const MainContextProvider = (props) => {
  const localJWT = localStorage.getItem("token") || " ";
  const [Jwt, setJWT] = useState(localJWT);
  return (
    <MainContext.Provider value={{ Jwt, setJWT }}>
      {props.children}
    </MainContext.Provider>
  );
};

export { MainContextProvider, MainContext };
