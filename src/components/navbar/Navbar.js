import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import User from '../../assets/menu/user.svg';
import {logout} from '../../service/Auth';
import Searchbar from '../searchbar/Searchbar';
import "./Navbar.css";

function Navbar() {
  const {keycloak} = useKeycloak();

  function LogoutUser(){
    keycloak.logout({ redirectUri: 'http://localhost:3000' });
    // localStorage.removeItem("react-token", keycloak.token);
    // localStorage.removeItem("react-refresh-token", keycloak.refreshToken);
    logout();
  }

  function forgotAccount(){
    alert("Account vergeten");
    console.log("Account vergeten");
  }

  return (
    keycloak.authenticated &&
     <nav>
        <div className="nav">
        <h1>Navbar</h1>
          <Searchbar/>
          {/* <input type="text" placeholder="Zoek een persoon of locatie"/> */}
          <div className="nav-profile">
            <div className="dropdown">
              <img className="nav-image" alt="navimage" src={User} height={18}/>
              <div className="dropdown-content">
                <button onClick={LogoutUser}>Logout</button>
                <button onClick={forgotAccount}>Vergeet mijn account</button>
              </div>
            </div>
            <p>{keycloak.authenticated && keycloak.tokenParsed.name}</p>
          </div>
        </div>
    </nav>
    
   
  );
}

export default Navbar;
