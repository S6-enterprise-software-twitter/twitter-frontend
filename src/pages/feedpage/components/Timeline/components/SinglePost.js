import React from 'react';
import { render } from '@testing-library/react';
import Like from '../../../../../assets/svg/Like.svg';
import TemplateAvatar from '../../../../../assets/Profile_picture.jpg';
import './SinglePost.css';


function SinglePost(){
    return(
        <div className="singlepost-block">
            <div className="singlepost-title">
                <img src={TemplateAvatar} alt="avatar"/>
                <h3>@Peterpan</h3>
            </div>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec interdum purus.
                Aliquam accumsan,arcu et vehicula venenatis, purus leo sagittis tortor,
                ac dictum metus sem non ante. Nullam nec </p>
                {/* <img src={TemplateAvatar} alt="avatar"/> */}
             <div className="singlepost-details">
                <p>1 hour ago</p>
                <span><img src={Like} alt="likes"/>55 Likes</span>
            </div>
        </div>
    )
}

export default SinglePost;