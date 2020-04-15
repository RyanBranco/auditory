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
                <i id={styles.options} className="material-icons">more_vert</i>
                <img src={placeholder} alt="placeholder"></img>
                <div id={styles.cardContents}>
                    <p id={styles.title}>This is where the title will go</p>
                    <p id={styles.username}>by (username will go here)</p>
                    <div id={styles.icons}>
                        <i id={styles.AudioCardControls} className="material-icons">thumb_up</i>
                        <i id={styles.AudioCardControls} className="material-icons">thumb_down</i>
                        <i id={styles.AudioCardControls} className="material-icons">chat</i>
                    </div>
                </div>
                <div id={styles.controller}>
                    <audio controls>
                        <source src="horse.mp3" type="audio/mpeg"></source>
                    </audio>
                </div>
            </div>
        )
    }
}

export default AudioCard;