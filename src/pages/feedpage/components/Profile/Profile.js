import React from 'react';
import ProfileBanner from '../../../../assets/Profile_banner.jpg';

import "./Profile.css";

function Profile(props){
    const user = props.user;

    console.log(user);
    return(
        <div className="section-profile">
             <image src={ProfileBanner} alt="banner"/>
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
                            <p>23</p>
                        </div>
                        <div className="column">
                            <h3>FOLLOWERS</h3>
                            <p>58</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;