import { React } from 'react';
import { useHistory } from "react-router-dom";
import Coffee from '../../../../assets/menu/coffee.svg';
import GoogleAds from '../../../../assets/menu/Google-Ads.png';
import Hashtag from '../../../../assets/menu/hashtag.svg';
import Notification from '../../../../assets/menu/notification.svg';
import User from '../../../../assets/menu/user.svg';
import { decodeJWT, getToken } from "../../../../service/Auth";
import "./Menu.css";



function Menu(){
    const history = useHistory();

    function goToHome(){
        window.location.href = "/home";
    }

    function goToProfile(){
        const token = getToken();
        const decodedToken = decodeJWT(token);
        const userId = decodedToken.sub;

        window.location.href = `/user/${userId}`;
    }
    return(
        <div className="section-menu">
            <div className="menu-block">
                <h3>Menu</h3>
                <ul>
                    <li onClick={goToHome}><img src={Coffee} height={16}/>Startpagina</li>
                    <li><img src={Notification} height={18}/>Meldingen</li>
                    <li><img src={Hashtag} height={18}/>Verkennen</li>
                    <li onClick={goToProfile}><img src={User} height={18}/>Profile</li>
                </ul>
            </div>
            <div className="google-block">
                <img src={GoogleAds} alt="Google Ads"/>
            </div>
    </div>
    )
}
export default Menu;