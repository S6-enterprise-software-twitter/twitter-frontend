import React, {useState} from 'react';
import {Link, withRouter,Route, Redirect, useHistory} from 'react-router-dom';


import "./LoginLeft.css";

function LoginLeft(props) {
  // const [loginClicked, setLoginClicked] = useState(true);

  const { history } = useHistory();
  const loginUser = () => {
    console.log("Logged in");
    window.location.href = "/home";
    // loginClicked = true;
  // history.push('/home')
  }
  return (
    <div className="login-left">
        <div className="login-left-content">
            <div className="flex">
                <h1>My Logo</h1>
                <h3>Welkom!</h3>
                <div className="login-form">
                    <input type="submit" value="Log in" onClick={loginUser} ></input>
                    <a href="/">Nog geen account. Registreer hier.</a>
                </div>
            </div>
         
        </div>
    </div>
  );
}

export default LoginLeft;
