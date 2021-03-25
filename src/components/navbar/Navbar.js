import React, {useEffect} from 'react';
import User from '../../assets/menu/user.svg';
import { decodeJWT } from '../../service/Auth';

import {initOptions, keycloak} from '../../service/Service';

import "./Navbar.css";

function Navbar() {
  let userData =  decodeJWT(window.localStorage.getItem("react-token"));

  function LogoutUser(){
    console.log(keycloak);
    console.log("Logged out")
    // console.log(keycloak.authenticated)
    keycloak.logout({ redirectUri: 'http://localhost:3000' });
    // keycloak.logout();
    // window.localStorage.removeItem("react-token");
    // window.localStorage.removeItem("react-refresh-token");
    // window.location.href = "/";
  }
  return (
    <nav>
        <div className="nav">
        <h1>Navbar</h1>
          <input type="text" placeholder="Zoek een persoon of locatie"/>
          <div className="nav-profile">
            <div className="dropdown">
              <img className="nav-image" src={User} height={18}/>
              <div className="dropdown-content">
                <a onClick={LogoutUser}>Logout</a>
              </div>
            </div>
            <p>{userData.name}</p>
          </div>
        </div>
    </nav>
  );
}

export default Navbar;
