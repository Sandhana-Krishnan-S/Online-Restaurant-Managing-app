import React, { createContext, useContext, useState } from 'react';

export const Context = createContext({});

const UserContext = ({ children }) => {
  const [UserName , setName] = useState("SFDF");
  const [isLogedin , setStatus] = useState(true);

  function signinHandler(UserName) {
    setName(UserName);
    setStatus(true);
  }

  function handleLogOut() {
    setName("");
    setStatus(false);
  }

  const data = {
    UserName , 
    isLogedin ,
    signinHandler , 
    handleLogOut ,
  };

  return (
  <Context.Provider value={data}>{ children }</Context.Provider>
  );
};

export default UserContext;