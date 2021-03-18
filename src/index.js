import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Keycloak from 'keycloak-js';

//keycloak init options
let initOptions = {
  url: 'http://localhost:8080/auth', realm: 'Twitter', clientId: 'twitter-frontend', onLoad: 'login-required'
}


let keycloak = Keycloak(initOptions);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// keycloak.init({ onLoad: initOptions.onLoad }).success((auth) => {

//   if (!auth) {
//       window.location.reload();
//   } else {
//       console.info("Authenticated");
//   }

//   //React Render
  
//   localStorage.setItem("react-token", keycloak.token);
//   localStorage.setItem("react-refresh-token", keycloak.refreshToken);

//   setTimeout(() => {
//       keycloak.updateToken(70).success((refreshed) => {
//           if (refreshed) {
//               console.debug('Token refreshed' + refreshed);
//           } else {
//               console.warn('Token not refreshed, valid for '
//                   + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
//           }
//       }).error(() => {
//           console.error('Failed to refresh token');
//       });


//   }, 60000)

// }).error(() => {
//   console.error("Authenticated Failed");
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
