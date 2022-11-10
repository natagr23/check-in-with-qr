import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';

import { ContextProvider } from './context/Context';
import { Outlet } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  <>
    <BrowserRouter>
      {/* <ContextProvider> */}
      <Login />
      <Routes>
        <Route path="/" element={[<About />, <Dashboard />, <GraphPage />]} />
        <Route path="/pages/index" element={[<GraphPage />]} />
      </Routes>
      <Outlet />
      {/* </ContextProvider> */}
    </BrowserRouter>
  </>;
}

export default App;
