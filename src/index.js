import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//create context start
export const MyContext = React.createContext(null);
//create context end
//{} : is the json object. It contains key:value
ReactDOM.render(
  <MyContext.Provider value={{a:10,b:20}}>
  <App />
  </MyContext.Provider>
  , document.getElementById("root"));
