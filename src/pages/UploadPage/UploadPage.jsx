import React, { Component } from "react";
import "./UploadPage.css";

const axios = require("axios");
let newId;
let message;

class UploadPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            audioFile: null,
            thumbnailFile: null,
            description: "",
            category: "other",
            user: this.props.user._id
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
            message = <p id="uploadMessage" className="error">{newMessage}</p>
            return
        } else {
            message = <p id="uploadMessage" className="success">{newMessage}</p>
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
        if (getExtention(audioFileLowered) === "wav" || getExtention(audioFileLowered) === "mp3") {
            this.giveMessage("upload successful")
        } else {
            this.giveMessage(".mp3 or .wav files only")
        }
        axios.post("/api/uploads/upload", formData, config);
        this.matchAudioFileNames(newId)
    }

    sendBody() {
        return fetch('/api/uploads/createUpload', {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(this.state)
        }).then(this.reset())
    }

    reset() {
        this.setState({
            audioFile: null,
            thumbnailFile: null
        })
    }

    render() {
        return (
            <div id="UploadPage" className="contracted-main">
            <h4>upload</h4>
                <form onSubmit={this.handleSubmit}>
                    <div id="UploadFormContainer">
                        <div className="subDivAudio">
                            <h5>audio file</h5>
                            <div className="subDiv">
                                <div id="dragAndDrop">
                                    <i className="fa fa-cloud-upload" id="cloud"></i>
                                    <input type="file" name="audioFile" id="audioInput" onChange={this.handleSelectedFile} ></input>
                                </div>
                                <div id="thumbnailDiv">
                                    <div id="thumbnailBox">
                                        <input type="file" name="thumbnailFile" id="thumbnailInput" onChange={this.handleSelectedFile} />
                                        <i className="fa fa-camera" id="thumbnailImage"></i>
                                        <p id="thumbnailText">thumbnail</p>
                                    </div>
                                </div>
                                <input placeholder="insert title" name="title" id="title" onChange={this.handleChange} ></input>
                            </div>
                            <div id="SubSubDiv">
                                <textarea placeholder="description..." id="descriptionBox" name="description" onChange={this.handleChange} ></textarea>
                                <div id="bottomForm">
                                    <label>category</label>
                                    <select id="category" name="category" onChange={this.handleChange} >
                                        <option value="other">other</option>
                                        <option value="music">music</option>
                                        <option value="podcast">podcast</option>
                                        <option value="smalltalk">small talk</option>
                                    </select>
                                    <button type="submit" id="submitButton">upload</button>
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