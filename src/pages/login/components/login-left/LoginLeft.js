import React from 'react';
import {Link, withRouter,Route, Redirect, useHistory} from 'react-router-dom';
import "./LoginLeft.css";

function LoginLeft(props) {
  const { history } = useHistory();
  const loginUser = () => {
    console.log("Logged in");

  // history.push('/home')
  }
  return (
    <div className="login-left">
        <div className="login-left-content">
            <div className="flex">
                <h1>My Logo</h1>
                <h3>Welkom!</h3>
                <p>Meld je aan door je gegevens in te vullen</p>
                <div className="login-form">
                    <input type="text" placeholder="Vul hier je gebruikersnaam in" name="username"/>
                    <input type="text" placeholder="Vul hier je wachtwoord in" name="wachtwoord"/>
                    <input type="submit" value="Log in" onClick={loginUser} ></input>
                    <a href="/">Nog geen account. Registreer hier.</a>
                </div>
            </div>
         
        </div>
    </div>
  );
}

export default LoginLeft;
