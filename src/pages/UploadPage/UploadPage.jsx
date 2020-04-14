import React, { Component } from "react";
import styles from "./UploadPage.module.css";

const axios = require("axios");
let newId;
let message;

class UploadPage extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            audioFile: null,
            thumbnailFile: null,
            description: "",
            category: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectedFile = this.handleSelectedFile.bind(this);
    }

    changeFilename(fileName) {
        const ID = function() {
            return '_' + Math.random().toString(36).substr(2, 9);
        }; 
    
        const getExtention = function(fileName) {
            return fileName.split('.').pop();
        }
    
        return ID() + "." + getExtention(fileName)
    }

    async matchAudioFileNames(newId) {
        await this.setState({
            audioFile: newId
        })
        this.sendBody()
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    handleSelectedFile = e => {
        this.setState({
            [e.target.name]: e.target.files[0]
        })
    };

    giveMessage(newMessage) {
        if (newMessage === ".mp3 or .wav files only") {
            message = <p id={styles.uploadMessage} className={styles.error}>{newMessage}</p>
            return
        } else {
            message = <p id={styles.uploadMessage} className={styles.success}>{newMessage}</p>
        }
    }

    handleSubmit(e){
        const getExtention = function(fileName) {
            return fileName.split('.').pop();
        }
        newId = this.changeFilename(this.state.audioFile.name)
        e.preventDefault();
        const formData = new FormData();
        formData.append("audioFile", this.state.audioFile, newId);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        let audioFileLowered = this.state.audioFile.name.toLowerCase();
        if (getExtention(audioFileLowered) !== "wav" || getExtention(audioFileLowered) !== "mp3") {
            this.giveMessage(".mp3 or .wav files only")
        }
        axios.post("/api/uploads/upload", formData, config);
        this.matchAudioFileNames(newId)
    }

    sendBody() {
        this.giveMessage("successfully uploaded")
        return fetch('/api/uploads/createUpload', {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(this.state)
        })
    }

    render() {
        return (
            <div id={styles.UploadPage} className="contracted-main">
            <h4>upload</h4>
                <form onSubmit={this.handleSubmit}>
                    <div id={styles.UploadFormContainer}>
                        <div className={styles.subDivAudio}>
                            <h5>audio file</h5>
                            <div className={styles.subDiv}>
                                <div id={styles.dragAndDrop}>
                                    <i className="fa fa-cloud-upload" id={styles.cloud}></i>
                                    <input type="file" name="audioFile" id={styles.audioInput} onChange={this.handleSelectedFile} ></input>
                                </div>
                                <div id={styles.thumbnailDiv}>
                                    <div id={styles.thumbnailBox}>
                                        <input type="file" name="thumbnailFile" id={styles.thumbnailInput} onChange={this.handleSelectedFile} />
                                        <i className="fa fa-camera" id={styles.thumbnailImage}></i>
                                        <p id={styles.thumbnailText}>thumbnail</p>
                                    </div>
                                </div>
                                <input placeholder="insert title" name="title" id={styles.title} onChange={this.handleChange} ></input>
                            </div>
                            <h5 id={styles.detailsH5}>details</h5>
                            <div id={styles.SubSubDiv}>
                                <textarea placeholder="description..." id={styles.descriptionBox} name="description" onChange={this.handleChange} ></textarea>
                                <div id={styles.bottomForm}>
                                    <label>category</label>
                                    <select id={styles.category} name="category" onChange={this.handleChange} >
                                        <option value="other">other</option>
                                        <option value="music">music</option>
                                        <option value="podcast">podcast</option>
                                        <option value="smalltalk">small talk</option>
                                    </select>
                                    <button type="submit" id={styles.submitButton}>upload</button>
                                    {message}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default UploadPage;