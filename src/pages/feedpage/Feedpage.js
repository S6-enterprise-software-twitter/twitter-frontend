import React, { useState, useEffect } from 'react';
import Post from './components/Post/Post';
import "./Feedpage.css";
import Keycloak from 'keycloak-js';
import { decodeJWT } from '../../service/Auth';
import Profile from './components/Profile/Profile';
import Menu from './components/Menu/Menu';
import Navbar from '../../components/navbar/Navbar';
import { useKeycloak } from "@react-keycloak/web"
import { me } from '../../service/UserService';


const meCall = async (user) => {
  console.log(user);
  await me(user).then(result =>{
    console.log(result);
    //  Result is either that the user is created or user already exists.
  })
}
function Feedpage() {
  const [user, setUser] = useState();
  const {keycloak} = useKeycloak();

  useEffect(() => {
    const userData = decodeJWT(keycloak.token);
    const currentUser = {
      id: userData["sub"],
      email:  userData.email,
      firstName: userData.given_name,
      lastName: userData.family_name,
      fullName: userData.name,
      username: userData.preferred_username
    }
    setUser(currentUser);
    meCall(currentUser);
  }, []);

  return (
    <div className="feedpage-row">
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
