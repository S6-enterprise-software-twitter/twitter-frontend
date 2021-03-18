import React, {useEffect} from 'react';
import Post from './components/Post/Post';
import "./Feedpage.css";
import Keycloak from 'keycloak-js';
import {decodeJWT} from '../../service/Auth';
 
function Feedpage() {
   // //keycloak init options
   let initOptions = {
    url: 'http://localhost:8080/auth', realm: 'Twitter', clientId: 'twitter-frontend', onLoad: 'login-required'
  }

  let keycloak = Keycloak(initOptions);

  const checkRegisterUser = () =>{
    // Bearer token uitlezen.
    const token = localStorage.getItem("react-token");
    const decodedJWT = decodeJWT(token);
    const keycloakId = decodedJWT["sub"];
    const newUser = {
      id: decodedJWT["sub"],
      email: decodedJWT["email"],
      firstname: decodedJWT["given_name"],
      lastname: decodedJWT["family_name"],
      username: decodedJWT["preferred_username"]
    }
    // Kijk of keycloak id in DB zit
    console.log(newUser);
    // await get user by id
    
    // Zoja,
    // RegisterUser();

    // Zo nee,
    // Doe niks
  }


  React.useEffect(() => {
    keycloak.init({ onLoad: initOptions.onLoad }).success((auth) => {
      console.log(localStorage.getItem("react-token"))
  
      if (!auth) {
        window.location.reload();
      } else {
        console.info("Authenticated");
      }
  
      //React Render
      
      localStorage.setItem("react-token", keycloak.token);
      localStorage.setItem("react-refresh-token", keycloak.refreshToken);
      checkRegisterUser();
  
      setTimeout(() => {
          keycloak.updateToken(70).success((refreshed) => {
              if (refreshed) {
                  console.debug('Token refreshed' + refreshed);
              } else {
                  console.warn('Token not refreshed, valid for '
                      + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
              }
          }).error(() => {
              console.error('Failed to refresh token');
          });
  
  
      }, 60000)
  
    }).error(() => {
      console.error("Authenticated Failed");
    });
 },[]);
  return (
    <div className="feedpage-row">
        <div className="feedpage-column">
            <h1>Column 1</h1>
        </div>
        <div className="feedpage-column">
            <Post/>
        </div>
        <div className="feedpage-column">
            <h1>Column 3</h1>
        </div>
    </div>
  );
}

export default Feedpage;
