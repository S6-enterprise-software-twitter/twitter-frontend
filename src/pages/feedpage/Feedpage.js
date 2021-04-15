import { useKeycloak } from "@react-keycloak/web";
import React, { useEffect, useState } from 'react';
import { decodeJWT } from '../../service/Auth';
import { me } from '../../service/UserService';
import Menu from './components/Menu/Menu';
import Post from './components/Post/Post';
import Timeline from './components/Timeline/Timeline';
import Profile from './components/Profile/Profile';
import {login} from '../../service/Auth';
import "./Feedpage.css";

const meCall = async (user) => {
  await me(user).then(result =>{
    console.log("Result of me call", result);
    //  Result is either that the user is created or user already exists.
  })
}
function Feedpage() {
  const [user, setUser] = useState();
  const {keycloak} = useKeycloak();

  useEffect(() => {
    console.log(keycloak.token);
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
    login(keycloak.token);
  }, []);

  return (
    <div className="feedpage-row">
      <div className="feedpage-column feedpage-column-1">
        <Menu />
      </div>
      <div className="feedpage-column feedpage-column-2">
        <Post />
        <Timeline/>
      </div>
      <div className="feedpage-column feedpage-column-3">
        {user != null ? <Profile user={user}/> : null}
      </div>
    </div>
  );
}

export default Feedpage;
