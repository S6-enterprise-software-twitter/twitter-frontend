import { ReactKeycloakProvider } from '@react-keycloak/web';
import React from 'react';
import keycloak from './Keycloak';
import { AppRouter } from './routes/AppRouter';
import './App.css';

function App() {
  return <ReactKeycloakProvider authClient={keycloak}>
      <AppRouter/>
  </ReactKeycloakProvider>
}

export default App;