import React, { useState } from 'react';
import SinglePost from './components/SinglePost';
import './Timeline.css';
function Timeline(){
    const [showTimelineBool, setShowTimelineBool] = useState(true);
    
    function showTimeline(){
        setShowTimelineBool(true);
    }

    function showMentions(){
        setShowTimelineBool(false);
    }

    return(
        <div className="section-timeline">
            <div className="timeline-block">
                <div className="timeline-header">
                    <h5 className={showTimelineBool ? "" : "timeline-not-active"} onClick={showTimeline}>TIMELINE</h5>
                    <h5 className={showTimelineBool ? "timeline-not-active" : ""} onClick={showMentions}>MENTIONS</h5>
                </div>
                <div className="timeline-posts">
                    {showTimelineBool ? <SinglePost/> : <h2>Mentions dingen</h2>}
                </div>
            </div>
        </div>
    )
}

export default Timeline;