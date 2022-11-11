import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import LoginAdmin from './Pages/LoginAdmin';
import LoginEmployee from './Pages/LoginEmployee';
import AdminAccount from './Pages/AdminAccount';
import EmployeeAccount from './Pages/EmployeeAccount';

import { ContextProvider } from './Pages/Context';
import { Outlet } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Login />
          <Routes>
            <Route path="/" element={[<Login />, <LoginAdmin />]} />
            <Route path="/Pages/LoginAdmin" element={[<LoginAdmin />]} />
            <Route path="/Pages/LoginEmployee" element={[<LoginEmployee />]} />
            <Route path="/Pages/AdminAccount" element={[<AdminAccount />]} />
            <Route
              path="/Pages/LoginEmployee/Pages/EmployeeAccount"
              element={[<EmployeeAccount />]}
            />
          </Routes>
          <Outlet />
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
