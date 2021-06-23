import moment from 'moment';
import React from 'react';
import TemplateAvatar from '../../../../../assets/Profile_picture.jpg';
import Comments from '../../../../../assets/svg/Comments.svg';
import Like from '../../../../../assets/svg/Like.svg';
import './SinglePost.css';

/*
function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;   
}*/

function SinglePost(props){

    function validateYouTubeUrl(urlToParse){
        if (urlToParse) {
            var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
            if (urlToParse.match(regExp)) {
                return {isValid: true, ID: RegExp.$1}
            }
        }
        return false;
    }
   
    function embedYoutubeLink(postDescription){
        const response = validateYouTubeUrl(postDescription);
        if(response.isValid){
            return(<div className="video-responsive">
            <iframe
              src={`https://www.youtube.com/embed/${response.ID}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              allow='autoplay'
              
            />
            <p>{postDescription}</p>
          </div>
            )
        }else{
            return <p>{postDescription}</p>
        }
    }
    
    const post = props.post;
    
    const localTime = post.date + "Z";

    return(
        <div className="singlepost-block">
            <div className="singlepost-title">
                <img src={TemplateAvatar} alt="avatar"/>
                <h3>@{post.username}</h3>
            </div>
            <div className="singlepost-description">
                {embedYoutubeLink(post.description)}
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