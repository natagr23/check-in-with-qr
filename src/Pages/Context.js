import React, { useState, createContext } from 'react';

export const Context = createContext({});

export const ContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(1);
  const [timeActive, setTimeActive] = useState(false);

  const updateUser = () => {
    setCurrentUser(2);
  };

  const updateTimeActive = (timeActive) => {
    setTimeActive(() => timeActive);
  };

  return (
    <Context.Provider
      value={{
        currentUser: currentUser,
        updateUser: updateUser,
        timeActive: timeActive,
        updateTimeActive: updateTimeActive,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
