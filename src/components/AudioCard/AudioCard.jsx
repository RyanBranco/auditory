import React from "react"
import "./AudioCard.css";

let awsURL = "https://auditory-app.s3-us-west-1.amazonaws.com/";
let color;

const AudioCard = (props) => {
    if (props.upload.category === "music") {
        color = "yellow"
    }
    if (props.upload.category === "smalltalk") {
        color = "cyan"
    }
    if (props.upload.category === "podcast") {
        color = "orange"
    }
    if (props.upload.category === "asmr") {
        color = "lightpurple"
    }
    if (props.upload.category === "other") {
        color = "darkblue"
    }

    return (
        <div id="AudioCard">
            <div id="AudioCardUpperContent">
                <img src={awsURL + props.upload.thumbnailFile} alt="audio upload thumbnail"></img>
                <div id="cardContents">
                    <p id="cardTitle">{props.upload.title}</p>
                    <p id="username">by {props.upload.user.userName}</p>
                </div>
                    <div id="icons">
                        <i id="LikeButton" className="material-icons">thumb_up</i>
                        <i id="DislikeButton" className="material-icons">thumb_down</i>
                        <i id="CommentButton" className="material-icons">chat</i>
                        <i id="options" className="material-icons">more_vert</i>
                    </div>
            </div>
            <div id="controller">
                <div className={`category-color ${color}`}></div>
                <audio controls>
                    <source src={awsURL + props.upload.audioFile} type="audio/mpeg"></source>
                </audio>
            </div>
        </div>
    )
}

export default AudioCard;