import React, { useState, createContext, useEffect, useRef } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

export const Context = createContext({});

export const ContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(1);
  const [timeActive, setTimeActive] = useState(false);
  const [employeeList, setEmployeeList] = useLocalStorage('employeeList', []);

  const [officeLocationList, setOfficeLocationList] = useLocalStorage(
    'officeLocationList',
    [
      { name: 'Bogota', id: '4544444' },
      { name: 'Bucaramanga', id: '6755555' },
    ]
  );
  const [employeePerOfficeList, setEmployeePerOfficeList] = useLocalStorage(
    'employeePerOfficeList',
    [
      { office: 'Bogota', employee: 'Natalia' },
      { office: 'Bucaramanga', employee: 'Natalia' },
      { office: 'Bucaramanga', employee: 'Jorge' },
    ]
  );

  // useEffect(() => {
  //   setEmployeeList([
  //     {
  //       name: 'Natalia',
  //       email: 'nata555@hotmail.com',
  //     },
  //     {
  //       name: 'Jorge',
  //       email: 'jorge555@hotmail.com',
  //     },
  //   ]);
  // }, []);

  const updateEmployeeList = (data) => {
    setEmployeeList(() => data);
  };

  const updateOfficeLocationList = (data) => {
    setOfficeLocationList(() => data);
  };

  const updateEmployeePerOfficeList = (data) => {
    setEmployeePerOfficeList(() => data);
  };
  const updateUser = () => {
    setCurrentUser(2);
  };

  const updateTimeActive = (timeActive) => {
    setTimeActive(() => timeActive);
  };

  const addNewEmployee = (newName, newEmail) => {
    setEmployeeList([...employeeList, { name: newName, email: newEmail }]);
  };

  const addNewOfficeLocation = (newName, newId) => {
    setOfficeLocationList([
      ...officeLocationList,
      { name: newName, id: newId },
    ]);
  };

  const addNewemployeePerOffice = (newOffice, newEmployee) => {
    setEmployeePerOfficeList([
      ...employeePerOfficeList,
      { office: newOffice, employee: newEmployee },
    ]);
  };

  return (
    <Context.Provider
      value={{
        addNewemployeePerOffice: addNewemployeePerOffice,
        addNewOfficeLocation: addNewOfficeLocation,
        addNewEmployee: addNewEmployee,
        updateEmployeePerOfficeList: updateEmployeePerOfficeList,
        updateofficeLocationList: updateOfficeLocationList,
        updateEmployeeList: updateEmployeeList,
        employeePerOfficeList: employeePerOfficeList,
        officeLocationList: officeLocationList,
        employeeList: employeeList,
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
