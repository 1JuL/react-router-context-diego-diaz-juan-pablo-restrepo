import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Overview, Login, Contact } from './pages'
import { AuthProvider } from "./components/AuthContext";
import { ROUTES } from './routes';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME.path} element={<Home />} />
          <Route path={ROUTES.LOGIN.path} element={<Login />} />
          <Route path={ROUTES.OVERVIEW.path} element={<Overview />} />
          <Route path={ROUTES.CONTACT.path} element={<Contact />} />
          <Route path={ROUTES.ERROR_404.path} element={<div><h1>Not found</h1></div>} />
          <Route path="*" element={<Navigate to={ROUTES.ERROR_404.path} replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App