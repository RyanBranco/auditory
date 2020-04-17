import React from "react";
import placeholder from "../../images/placeholder-1-e1533569576673-960x960.png"
import "./UploadListCard.css";

const UploadListCard = (props) => {
    return (
        <div className="UploadListCard">
            <img src={placeholder} alt="thumbnail"></img>
            <p className="user-upload-title">this is where the title will go</p>
            <div className="user-upload-stats">
                <p>listens: 111</p>
                <p>comments: 111</p>
            </div>
            <div className="card-actions">
                <p>edit</p>
                <i id="delete" className="material-icons">delete</i>
            </div>
        </div>
    )
}

export default UploadListCard;