import React, {useState} from 'react';
import './App.css';
import Login from './pages/login/Login';
import Feedpage from './pages/feedpage/Feedpage';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProtectedRoute from '../src/components/routes/ProtectedRoute';

import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './Keycloak';
import { AppRouter } from './routes/AppRouter';

function App() {
  return <ReactKeycloakProvider authClient={keycloak}>
      <AppRouter/>
  </ReactKeycloakProvider>
}

export default App;