import React from "react";
import placeholder from "../../images/placeholder-1-e1533569576673-960x960.png";
import Popup from "reactjs-popup";
import "./UploadListCard.css";



const UploadListCard = (props) => {
    return (
        <div className="UploadListCard">
            <img src={placeholder} alt="thumbnail"></img>
            <div className="card-actions">
                <Popup modal trigger={<button id="edit">edit</button>}>
                    Modal Content
                </Popup>
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