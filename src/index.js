import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "@asgardeo/auth-react";

const root = ReactDOM.createRoot(document.getElementById('root'));

const config = {
  signInRedirectURL: "https://localhost:3000/protected",
  signOutRedirectURL: "https://localhost:3000/",
  clientID: "KE8reyQOYLX8VlX_RcddzpZ1v00a",
  baseUrl: "https://localhost:9443",
  scope: ["openid", "profile","email","roles"]
};

root.render(
  <AuthProvider config={config}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
