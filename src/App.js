import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import Employee from './Pages/Employee';

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
          <Routes>
            <Route path="/" element={[<Login />]} />
            <Route path="/Pages/Admin" element={[<Admin />]} />
            <Route path="/Pages/Employee" element={[<Employee />]} />
          </Routes>
          <Outlet />
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
