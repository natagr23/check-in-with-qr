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
  const [emailList, setEmailList] = useLocalStorage('emailList', [
    { email: 'pruebaxx@gmail.com' },
    { email: 'pruebagg@gmail.com' },
  ]);

  const updateEmployeeList = (employeeList) => {
    setEmployeeList(() => employeeList);
  };

  const updateOfficeLocationList = (officeLocationList) => {
    setOfficeLocationList(() => officeLocationList);
  };

  const updateEmployeePerOfficeList = (employeePerOfficeList) => {
    setEmployeePerOfficeList(() => employeePerOfficeList);
  };
  const updateUser = () => {
    setCurrentUser(2);
  };

  const updateTimeActive = (timeActive) => {
    setTimeActive(() => timeActive);
  };

  const updateEmailList = (emailList) => {
    setEmailList(() => emailList);
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

  const addNewEmail = (newEmail) => {
    setEmailList([...emailList, { email: newEmail }]);
  };

  return (
    <Context.Provider
      value={{
        addNewEmail: addNewEmail,
        updateEmailList: updateEmailList,
        emailList: emailList,
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
