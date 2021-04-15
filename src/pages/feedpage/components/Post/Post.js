import React, {useState} from 'react';
import ImageSVG from "../../../../assets/svg/image.svg";
import LocationSVG from "../../../../assets/svg/location.svg";
import {postTweet} from "../../../../service/PostService";
import {getToken,decodeJWT} from "../../../../service/Auth";
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
        })
    }

    function descriptionOnChange(e){
        SetDescription(e.target.value);
    }
  
    return (
    <div className="section-post">
        <div className="post-block">
            <textarea placeholder="What's up for today..." onChange={(e) => {descriptionOnChange(e)}}></textarea>
            <hr/>
            <div className="post-attachments">
                <div>
                   <img onClick={onImageUpload} src={ImageSVG}/>
                   <img src={LocationSVG}/>
                </div>
                <button onClick={sendPost}>Post</button>
            </div>
        </div>
    </div>
  );
}

export default Post;
