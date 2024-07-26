import logo from './logo.svg';
import React, { useState,useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Protected from './pages/Protected';
import { useAuthContext } from "@asgardeo/auth-react";
import Simple from './pages/Simple';

const App = () => {
  const { state, signIn, signOut,getDecodedIDToken } = useAuthContext();



  console.log("isAuthenticated:", state.isAuthenticated);


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        {state.isAuthenticated && (
          <>
            <Route exact path="/protected" element={<Protected />} />
              <Route exact path="/simple-protected" element={<Simple />} />

          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
