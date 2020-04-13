import React, { Component } from "react";
import styles from "./UploadPage.module.css";

class UploadPage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div id={styles.UploadPage} className="contracted-main">
            <h4>upload</h4>
                <div id={styles.UploadFormContainer}>
                    <div className={styles.subDivAudio}>
                        <h5>audio file</h5>
                        <div className={styles.subDiv}>
                            <div id={styles.dragAndDrop}>
                                <i className="fa fa-cloud-upload" id={styles.cloud}></i>
                                <input type="file" name="audioFile" id={styles.audioInput}></input>
                            </div>
                            <div id={styles.thumbnailDiv}>
                                <div id={styles.thumbnailBox}>
                                    <input type="file" name="thumbnailFile" id={styles.thumbnailInput} />
                                    <i className="fa fa-camera" id={styles.thumbnailImage}></i>
                                    <p id={styles.thumbnailText}>thumbnail</p>
                                </div>
                            </div>
                            <input placeholder="insert title" name="title" id={styles.title}></input>
                        </div>
                        <h5 id={styles.detailsH5}>details</h5>
                        <div id={styles.SubSubDiv}>
                            <textarea placeholder="description..." id={styles.descriptionBox} name="description"></textarea>
                            <div id={styles.bottomForm}>
                                <label>category</label>
                                <select id={styles.category} name="category">
                                    <option value="other">other</option>
                                    <option value="music">music</option>
                                    <option value="podcast">podcast</option>
                                    <option value="smalltalk">small talk</option>
                                </select>
                                <button id={styles.submitButton}>upload</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UploadPage;