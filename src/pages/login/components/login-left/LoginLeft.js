import { useKeycloak } from "@react-keycloak/web";
import React from 'react';
import "./LoginLeft.css";

function LoginLeft() {
  const { keycloak } = useKeycloak();

  let buttonText = "Log in";
  if (keycloak && !keycloak.authenticated) {
    buttonText = "Log in";
  } else {
    buttonText = "Ga verder waar u gebleven bent";
  }

  const loginUser = () => {
    if (keycloak && !keycloak.authenticated) {
      keycloak.login({ redirectUri: 'http://localhost:3000/home' }).success(p => {
      });
    } else {
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
