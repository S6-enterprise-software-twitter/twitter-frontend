import React from 'react';
import Coffee from '../../../../assets/menu/coffee.svg';
import Notification from '../../../../assets/menu/notification.svg';
import Hashtag from '../../../../assets/menu/hashtag.svg';
import User from '../../../../assets/menu/user.svg';

import GoogleAds from '../../../../assets/menu/Google-Ads.png';

import "./Menu.css";

function Menu(){
    return(
        <div className="section-menu">
            <div className="menu-block">
                <h3>Menu</h3>
                <ul>
                    <li className="menu-active"><img src={Coffee} height={16}/>Startpagina</li>
                    <li><img src={Notification} height={18}/>Meldingen</li>
                    <li><img src={Hashtag} height={18}/>Verkennen</li>
                    <li><img src={User} height={18}/>Profile</li>
                </ul>
            </div>
            <div className="google-block">
                <img src={GoogleAds} alt="Google Ads"/>
            </div>
    </div>
    )
}
export default Menu;