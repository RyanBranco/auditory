import React, { Component } from "react"
import styles from "./AudioCard.module.css";
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
            <div id={styles.AudioCard}>
                <i id={styles.options} className="material-icons">more_vert</i>
                <img src={placeholder} alt="placeholder"></img>
                <div id={styles.cardContents}>
                    <p id={styles.title}>{this.props.upload.title}</p>
                    <p id={styles.username}>by {this.props.upload.user}</p>
                    <div id={styles.icons}>
                        <i id={styles.LikeButton} className="material-icons">thumb_up</i>
                        <i id={styles.DislikeButton} className="material-icons">thumb_down</i>
                    </div>
                </div>
                <div id={styles.controller}>
                    <audio controls>
                        <source src={awsURL + this.props.upload.audioFile} type="audio/mpeg"></source>
                    </audio>
                </div>
                <i id={styles.CommentButton} className="material-icons">chat</i>
            </div>
        )
    }
}

export default AudioCard;