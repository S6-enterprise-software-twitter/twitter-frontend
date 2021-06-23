import React from 'react';
import { render } from '@testing-library/react';
import Like from '../../../../../assets/svg/Like.svg';
import LikeFilled from '../../../../../assets/svg/Like_filled.svg';
import Comments from '../../../../../assets/svg/Comments.svg';
import TemplateAvatar from '../../../../../assets/Profile_picture.jpg';
import moment from 'moment';
import './SinglePost.css';

function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;   
}

function SinglePost(props){
    console.log("RENDER FROM SINGLE POST:", props);
    const post = props.post;
    
    const localTime = post.date + "Z";

    return(
        <div className="singlepost-block">
            <div className="singlepost-title">
                <img src={TemplateAvatar} alt="avatar"/>
                <h3>@{post.username}</h3>
            </div>
            <div className="singlepost-description">
                <p>{post.description}</p>
                    {/* <img src={TemplateAvatar} alt="avatar"/> */}
                <div className="singlepost-details">
                    <p>{moment(localTime).fromNow()}</p>
                    <p className="like"><img src={Like} alt="likes"/>55 Likes</p>
                    <p className="comment"><img src={Comments} alt="likes"/>55 Comments</p>
                </div>
            </div>
            
        </div>
    )
}

export default SinglePost;