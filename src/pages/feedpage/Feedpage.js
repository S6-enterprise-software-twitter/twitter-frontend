import React, { useState, useEffect } from 'react';
import Post from './components/Post/Post';
import "./Feedpage.css";
import Keycloak from 'keycloak-js';
import { decodeJWT } from '../../service/Auth';
import { findById, register, test } from '../../service/UserService';
import Profile from './components/Profile/Profile';
import Menu from './components/Menu/Menu';
import Navbar from '../../components/navbar/Navbar';


function Feedpage() {
  const [user, setUser] = useState();
  const token = window.localStorage.getItem("react-token");
  useEffect(() => {
    const userData = decodeJWT(token);
    const currentUser = {
      email:  userData.email,
      firstName: userData.given_name,
      lastName: userData.family_name,
      fullName: userData.name,
      username: userData.preferred_username
    }
    setUser(currentUser);
    console.log(user);
  }, []);

  const TestCheckFindByApiEndpoint = async () => {
    await findById("19547ed8-8b5e-41a2-8bb7-f1179733f57b").then(result => {
      console.log(result)
    });
  }
  return (
    <div className="feedpage-row">
      {/* <button onClick={LogoutUser}>LOGOUT</button> */}
      <div className="feedpage-column feedpage-column-1">
        <Menu />
      </div>
      <div className="feedpage-column feedpage-column-2">
        <Post />
      </div>
      <div className="feedpage-column feedpage-column-3">
        {user != null ? <Profile user={user}/> : null}
      </div>
    </div>
  );
}

export default Feedpage;
