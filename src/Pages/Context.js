import React, { useState, createContext } from 'react';

export const Context = createContext({});

export const ContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  const updateUser = (user) => {
    setCurrentUser(() => user);
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
