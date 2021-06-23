import React, { useState } from 'react';
import ImageSVG from "../../../../assets/svg/image.svg";
import LocationSVG from "../../../../assets/svg/location.svg";
import { decodeJWT, getToken } from "../../../../service/Auth";
import { postTweet } from "../../../../service/PostService";
import "./Post.css";

function Post() {
    const [description,SetDescription] = useState();
    function onImageUpload(){
        alert("Deze functie wordt nog ingebouwd!");
    }

    function sendPost(){
        const decodedToken = decodeJWT(getToken());
        const userId = decodedToken.sub;

        const post = {
            userId : userId,
            description : description
        }
        console.log(post);
        postTweet(post,getToken()).then(result =>{
            console.log("Result from Posttweet", result);
            console.log("Post created");
            alert("Bericht getweet!");
        })
    }

    function descriptionOnChange(e){
        SetDescription(e.target.value);
    }
  
    return (
    <div className="section-post">
        {/* <Myprofile/> */}
        <div className="post-block">
            <textarea placeholder="What's up for today..." onChange={(e) => {descriptionOnChange(e)}}></textarea>
            <hr/>
            <div className="post-attachments">
                <div>
                   <img alt="profile" onClick={onImageUpload} src={ImageSVG}/>
                   <img alt="location" src={LocationSVG}/>
                </div>
                <button onClick={sendPost}>Post</button>
            </div>
        </div>
    </div>
  );
}

export default Post;
