import React from "react";
import {Link, useRouteMatch} from "react-router-dom";
import "./UploadListCard.css";

let awsURL = "https://auditory-app.s3-us-west-1.amazonaws.com/";

const UploadListCard = (props) => {
    let { path } = useRouteMatch();
    return (
        <div className="UploadListCard">
            <img src={awsURL + props.upload.thumbnailFile} alt="thumbnail"></img>
            <div className="card-actions">
                <Link to={`${path}/edit/${props.upload._id}`}><button id="edit" onClick={() => props.getSpecificUpload(props.upload._id)}>edit</button></Link>
                <i id="delete" className="material-icons" onClick={() => props.handleUploadDelete(props.uploadId)}>delete</i>
            </div>
            <p className="user-upload-title">{props.upload.title}</p>
            <div className="user-upload-stats">
                <p>listens: 0</p>
                <p>comments: {props.upload.comments.length}</p>
            </div>
        </div>
    )
}

export default UploadListCard;