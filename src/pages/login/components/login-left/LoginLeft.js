import React, { useState, useEffect } from 'react';
import { Link, withRouter, Route, Redirect, useHistory } from 'react-router-dom';
import { decodeJWT } from '../../../../service/Auth';
import { findById, register, test } from '../../../../service/UserService';
import {initOptions, keycloak} from '../../../../service/Service';
import "./LoginLeft.css";

function LoginLeft(props) {
  let buttonText = "Log in";
 
  if(window.localStorage.getItem("react-token") == null){
    buttonText = "Log in";
  }else{
    buttonText = "Ga verder waar u gebleven bent";
  }
  const loginUser = () => {
    if (window.localStorage.getItem("react-token") == null) {
   
      const checkRegisterUser = async () => {
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

        console.log(keycloakId)
        // Kijk of keycloak id in DB zit
        // await get user by id
        await findById(keycloakId).then(result => {
          if (result.message != null || result.message != "") {
            register(newUser).then(result => {
              console.log("User is aangemaakt")
            });
          }
        })
      }

      // On load
      keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {
        console.log(localStorage.getItem("react-token"))
        
        if (!auth) {
          window.location.reload();
        } else {
          window.location.href = "http://localhost:3000/home";
          console.info("Authenticated");
          props.setIsAuth(true);
        }

        //React Render
        localStorage.setItem("react-token", keycloak.token);
        localStorage.setItem("react-refresh-token", keycloak.refreshToken);
        checkRegisterUser();

        setTimeout(() => {
          keycloak.updateToken(70).then((refreshed) => {
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
    }else{
      window.location.href = "/home";
    }
  }
  return (
    <div className="login-left">
      <div className="login-left-content">
        <div className="flex">
          <h1>My Logo</h1>
          <h3>Welkom!</h3>
        

          <div className="login-form">
            <input type="submit" value={buttonText} onClick={loginUser} ></input>
            <a href="/">Nog geen account. Registreer hier.</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LoginLeft;
