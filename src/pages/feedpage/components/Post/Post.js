import React from 'react';
import ImageSVG from "../../../../assets/svg/image.svg";
import LocationSVG from "../../../../assets/svg/location.svg";

import "./Post.css";

function Post() {

   function onImageUpload(){
       alert("Deze functie wordt nog ingebouwd!");
   }
  return (
    <div className="section-post">
        <div className="post-block">
            <textarea placeholder="What's up for today..."></textarea>
            <hr/>
            <div className="post-attachments">
                <div>
                   <img onClick={onImageUpload} src={ImageSVG}/>
                   <img src={LocationSVG}/>
                </div>
                <button>Post</button>
            </div>
        </div>
    </div>
  );
}

export default Post;
