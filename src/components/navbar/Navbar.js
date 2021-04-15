import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import User from '../../assets/menu/user.svg';
import {logout} from '../../service/Auth';
import "./Navbar.css";

function Navbar() {
  const {keycloak} = useKeycloak();

  function LogoutUser(){
    keycloak.logout({ redirectUri: 'http://localhost:3000' });
    // localStorage.removeItem("react-token", keycloak.token);
    // localStorage.removeItem("react-refresh-token", keycloak.refreshToken);
    logout();
  }
  return (
    keycloak.authenticated &&
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
            <p>{keycloak.authenticated && keycloak.tokenParsed.name}</p>
          </div>
        </div>
    </nav>
    
   
  );
}

export default Navbar;
