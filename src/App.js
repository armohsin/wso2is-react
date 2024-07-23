import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Protected from './pages/Protected';
import { useAuthContext } from "@asgardeo/auth-react";
import Simple from './pages/Simple';

function App() {
  const { state, getDecodedIDToken, roles } = useAuthContext()
  useEffect(() => {
    if (state.isAuthenticated) {
      console.log(state)
      console.log("role",roles)
      getDecodedIDToken()
        .then((idToken) => {
          console.log("Decoded ID Token:", idToken);
          const roles = idToken.roles; // Assuming the roles claim is present in the token
          console.log("User Roles:", roles);
        })
        .catch((error) => {
          console.error("Error getting decoded ID token:", error);
        });
    }
  }, [state.isAuthenticated, getDecodedIDToken]);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        {state.isAuthenticated && (
        <>
        <Route exact path="/protected" element={<Protected />} />
        <Route exact path="/simple-protected" element={<Simple />} />
        </>)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
