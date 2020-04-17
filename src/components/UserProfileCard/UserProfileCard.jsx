import React from "react";
import placeholder from "../../images/placeholder-1-e1533569576673-960x960.png";
import "./UserProfileCard.css";

const UserProfileCard = (props) => {
    return (
        <div id="UserProfileCard">
            <button id="edit-profile">edit profile</button>
            <div className="profile-pic-and-name">
                <img className="large-profile-pic" src={placeholder} alt="large profile pic"></img>
                <p className="profile-username">{props.user.userName}</p>
                <p className="profile-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti perspiciatis veniam dolorum tenetur similique</p>
            </div>
            <div className="profile-stats">
                <p className="profile-stats-item">followers: 111</p>
                <p className="profile-stats-item">following: 111</p>
                <p className="profile-stats-item">liked: 111</p>
                <p className="profile-stats-item">disliked: 111</p>
                <p className="profile-stats-item">uploads: 111</p>
            </div>
        </div>
    )
}

export default UserProfileCard;