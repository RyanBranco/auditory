import React, { Component } from "react"
import "./AudioCard.css";
import placeholder from "../../images/placeholder-1-e1533569576673-960x960.png";

let awsURL = "https://auditory-app.s3-us-west-1.amazonaws.com/"

class AudioCard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div id="AudioCard">
                <div id="AudioCardUpperContent">
                    <i id="options" className="material-icons">more_vert</i>
                    <img src={placeholder} alt="placeholder"></img>
                    <div id="cardContents">
                        <p id="cardTitle">{this.props.upload.title}</p>
                        <p id="username">by {this.props.upload.user.userName}</p>
                        <div id="icons">
                            <i id="LikeButton" className="material-icons">thumb_up</i>
                            <i id="DislikeButton" className="material-icons">thumb_down</i>
                        </div>
                    </div>
                </div>
                <div id="controller">
                    <audio controls>
                        <source src={awsURL + this.props.upload.audioFile} type="audio/mpeg"></source>
                    </audio>
                </div>
                {/* <i id="CommentButton" className="material-icons">chat</i> */}
            </div>
        )
    }
}

export default AudioCard;