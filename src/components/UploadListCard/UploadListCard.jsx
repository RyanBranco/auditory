import React from "react";
import "./UploadListCard.css";

let awsURL = "https://auditory-app.s3-us-west-1.amazonaws.com/"

const UploadListCard = (props) => {
    return (
        <div className="UploadListCard">
            <img src={awsURL + props.upload.thumbnailFile} alt="thumbnail"></img>
            <div className="card-actions">
                <button id="edit">edit</button>
                <i id="delete" className="material-icons" onClick={() => props.handleUploadDelete(props.uploadId)}>delete</i>
            </div>
            <p className="user-upload-title">{props.upload.title}</p>
            <div className="user-upload-stats">
                <p>listens: 111</p>
                <p>comments: 111</p>
            </div>
        </div>
    )
}

export default UploadListCard;