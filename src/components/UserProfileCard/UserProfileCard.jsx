import React, {Component} from "react";
import defaultPicture from "../../images/unnamed.png"
import "./UserProfileCard.css";

const axios = require("axios");
let profileEditMode = false;
let awsURL = "https://auditory-app.s3-us-west-1.amazonaws.com/";
let newAvatar;
let userPic

class UserProfileCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: this.props.loggedUser.description,
            avatar: this.props.loggedUser.avatar
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

    async matchAudioFileNames(newAvatar) {
        await this.setState({
            avatar: newAvatar,
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
        
    handleSubmit = async (e) => {
        if (this.state.avatar === "") {
            this.sendBody()
        }
        const getExtention = function(fileName) {
            return fileName.split('.').pop();
        }
        newAvatar = this.changeFilename(this.state.avatar.name)
        e.preventDefault();
        const formData = new FormData();
        formData.append("avatar", this.state.avatar, newAvatar);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        let avatarLowered = this.state.avatar.name.toLowerCase();
        if (getExtention(avatarLowered) === "png" || getExtention(avatarLowered) === "jpeg" || getExtention(avatarLowered) === "jpg") {
            console.log("file state", this.state)
            axios.post("/api/uploads/upload/avatar", formData, config);
            this.matchAudioFileNames(newAvatar);   
        } else {
            return
        }
    }

    sendBody() {
        return fetch(`/api/users/updateProfile/${this.props.loggedUser._id}`, {
            method: 'PUT',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(this.state)
        }).then(res => res.json())
        .then(this.props.componentDidMount())
    }

    render() {
        this.props.loggedUser.avatar === "" ? userPic = defaultPicture : userPic = awsURL + this.props.loggedUser.avatar
        let profileCard = profileEditMode ?
        <div id="UserProfileCard">
            <form onSubmit={this.handleSubmit}>
                <button type="submit" id="edit-profile" onClick={() => {
                    profileEditMode = false
                }}>confirm</button>
                <div className="profile-pic-and-name">
                    <img className="large-profile-pic" src={userPic} alt="large profile pic"></img>
                    <input type="file" name="avatar" id="edit-profile-avatar" onChange={this.handleSelectedFile}></input>
                    <p className="profile-username">{this.props.loggedUser.userName}</p>
                    <textarea className="edit-description" value={this.state.description} name="description" onChange={this.handleChange}></textarea>
                </div>
            </form>
        </div>
        :
        <div id="UserProfileCard">
            <button id="edit-profile" onClick={() => {
                profileEditMode = true
                this.props.componentDidMount()
            }}>edit profile</button>
            <div className="profile-pic-and-name">
                <img className="large-profile-pic" src={userPic} alt="large profile pic"></img>
                <p className="profile-username">{this.props.loggedUser.userName}</p>
                <p className="profile-description">{this.props.loggedUser.description}</p>
            </div>
            <div className="profile-stats">
                <p className="profile-stats-item">followers: 111</p>
                <p className="profile-stats-item">following: 111</p>
                <p className="profile-stats-item">liked: 111</p>
                <p className="profile-stats-item">disliked: 111</p>
                <p className="profile-stats-item">uploads: 111</p>
            </div>
        </div>
        return (
            <div>
                {profileCard}
            </div>
        )
    }

}

export default UserProfileCard;