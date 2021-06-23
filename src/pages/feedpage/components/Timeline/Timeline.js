import React, { useState, useEffect } from 'react';
import SinglePost from './components/SinglePost';
import {getTimeline} from '../../../../service/TimelineService';
import {getToken} from '../../../../service/Auth';

import './Timeline.css';
function Timeline(){
    const [showTimelineBool, setShowTimelineBool] = useState(true);
    const [posts, setPosts] = useState([]);
    
    function showTimeline(){
        setShowTimelineBool(true);
    }

    function showMentions(){
        setShowTimelineBool(false);
    }
    
    useEffect(() => {
        setTimeout(()=>{
            fetchMyAPI();
           }, 1000)
        async function fetchMyAPI() {
            const token = getToken();
            if(!!token){
                const posts = await getTimeline(token);
                if(posts.length > 0){
                    console.log("All posts from timeline: ", posts);
                    posts.sort(function(a,b){
                        // Turn your strings into dates, and then subtract them
                        // to get a value that is either negative, positive, or zero.
                        return new Date(b.date) - new Date(a.date);
                    });
                    setPosts(posts);
                }
            }
          }

      },[] );

    return(
        <div className="section-timeline">
            <div className="timeline-block">
                <div className="timeline-header">
                    <h5 className={showTimelineBool ? "" : "timeline-not-active"} onClick={showTimeline}>TIMELINE</h5>
                    <h5 className={showTimelineBool ? "timeline-not-active" : ""} onClick={showMentions}>MENTIONS</h5>
                </div>
                <div className="timeline-posts">
                  { showTimelineBool && posts.length > 0 && (
                        
                        posts.map((post,i) =>(
                            <SinglePost key={i} post={post}/>
                        ))
                    )}
                    { !showTimelineBool &&(
                        <h1>Mentions dingen</h1>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Timeline;