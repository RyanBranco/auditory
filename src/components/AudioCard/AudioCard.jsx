import React, { Component } from "react"
import styles from "./AudioCard.module.css";
import placeholder from "../../images/placeholder-1-e1533569576673-960x960.png"

class AudioCard extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div id={styles.AudioCard}>
                <img src={placeholder} alt="placeholder"></img>
                <p id={styles.title}>This is where the title will go</p>
                <audio controls>
                    <source src="horse.mp3" type="audio/mpeg"></source>
                </audio>
                <p id={styles.username}>by (username will go here)</p>
                <i className="material-icons">thumb_up</i>
                <i className="material-icons">thumb_down</i>
                <i className="material-icons">chat</i>
            </div>
        )
    }
}

export default AudioCard;