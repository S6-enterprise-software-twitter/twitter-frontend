import React, {useEffect, useState} from 'react';
import Profile from '../../pages/feedpage/components/Profile/Profile';
import {getToken, decodeJWT} from '../../service/Auth';
import {findById} from '../../service/UserService';
import {isFollowingUser, followUser, unfollowUser} from '../../service/FollowerService';
import './Myprofile.css';

function Myprofile(props){
    // const isFollowing = false;
    const token = getToken();
    const otherUserId = props.match.params.userId;

    const[isFollowing, setIsfollowing] = useState(false);
    // const[test,setTest] = useState();
    const [user,setUser] = useState();
    const mockUser = {
        id: "12345678",
        email:  "userData.email",
        firstName: "userData.given_name",
        lastName: "userData.family_name",
        fullName: "userData.name",
        username: "userData.preferred_username"
      };

      function onFollowClick(){
        followUser(token,otherUserId).then(data=>{
          console.log(data);
          setIsfollowing(true);
        })
      }

      function onUnfollowClick(){
        if(window.confirm("Weet je zeker dat je " + user.firstname + " " + user.lastname + " wilt ontvolgen?")){
          unfollowUser(token,otherUserId).then(data=>{
            console.log(data);
            setIsfollowing(false);
          })
        }
      }

      useEffect(() => {
        isFollowingUser(token,otherUserId).then(result =>{
          console.log("ISFOLLOWING BEFORE", isFollowing);
          setIsfollowing(result.isFollowing);
          console.log("IS FOLLOWING AFTER", result);
        });
        var decodedJWT = decodeJWT(token);
        console.log(decodedJWT["sub"]);
        findById(otherUserId).then(data =>{
          setUser(data);
          //console.log("THIS IS THE DATA FROM USEEFFECT", user);
        })
        //findById(token)
        // console.log(otherUserId)
        // console.log(token);

      }, []);
    return(
        <div className="section-myprofile">
             <div className="myprofile-block">
                <Profile className="myprofile-profile" user={mockUser}/>
                <div className="myprofile-info">
                    { user != null && <h3>{user.firstname} {user.lastname}</h3>}
                    {/* <h3>{user != typeof(undefined) ? user.firstname + user.lastname : ""}</h3> */}
                    <h5>Bio</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec interdum purus. Aliquam accumsan, arcu et vehicula venenatis, purus leo sagittis tortor,</p>
                    <h5>Website</h5>
                    <p>Website.com</p>
                    <h5>Location</h5>
                    <p>Eindhoven</p>
                    {/* {isFollowing == true ? <button className="unfollow" onClick={onUnfollowClick}>Unfollow</button> : <button onClick={onFollowClick}>Follow</button>  } */}
                   
                    {isFollowing && <button className="unfollow" onClick={onUnfollowClick}>Unfollow</button> }
                    {!isFollowing && <button onClick={onFollowClick}>Follow</button>}
           
                </div>
            </div>
        </div>
    )
}

export default Myprofile;