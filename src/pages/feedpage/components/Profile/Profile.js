import React, { useEffect, useState } from 'react';
import { getToken } from '../../../../service/Auth';
import { getThePeopleThatFollowYou, getThePeopleYouFollow } from '../../../../service/FollowerService';
import "./Profile.css";


function Profile(props){
    const user = props.user;
    const [yourFollowings,setYourFollowings] = useState([]);
    const [followers,setFollowers] = useState([]);
    const token = getToken();

    useEffect(() =>{
        getThePeopleYouFollow(token).then(result =>{
            setYourFollowings(result);
            console.log("The people you follow: ", result);
        });

        getThePeopleThatFollowYou(token).then(result =>{
            setFollowers(result);
            console.log("The people that follow you: ", result);
        });
    },[])
    // console.log(user);
    return(
        <div className={props.className ? `section-profile ${props.className}`: "section-profile"}>
             {/* <image src={ProfileBanner} alt="banner"/> */}
            <div className="profile-block">
                <div className="profile-banner">
                    <div className="profile-circle"></div>
                    {/* <image src={ProfilePicture} /> */}
                </div>
                <div className="profile-information">
                    <h3>{user.fullName}</h3>
                    <div className="profile-description">
                        <div className="column">
                            <h3>FOLLOWING</h3>
                            <p>{yourFollowings.length}</p>
                        </div>
                        <div className="column">
                            <h3>FOLLOWERS</h3>
                            <p>{followers.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;