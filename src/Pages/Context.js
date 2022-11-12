import React, { useState, createContext, useEffect } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

export const Context = createContext({});

export const ContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(1);
  const [timeActive, setTimeActive] = useState(false);
  const [employeeList, setEmployeeList] = useLocalStorage('employeeList', []);

  const [officeLocationList, setOfficeLocationList] = useLocalStorage([
    { name: 'Bogota', id: '4544444' },
    { name: 'Bucaramanga', id: '6755555' },
  ]);
  const [employeePerOfficeList, setEmployeePerOfficeList] = useLocalStorage([
    { office: 'Bogota', employee: 'Natalia' },
    { office: 'Bucaramanga', employee: 'Natalia' },
    { office: 'Bucaramanga', employee: 'Jorge' },
  ]);

  useEffect(() => {
    setEmployeeList([
      { name: 'Natalia', email: 'nata555@hotmail.com' },
      { name: 'Jorge', email: 'jorge555@hotmail.com' },
    ]);
  }, []);

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
