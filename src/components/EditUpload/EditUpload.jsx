import React, { useState } from 'react';
import "./EditUpload.css";

let color;
let awsURL = "https://auditory-app.s3-us-west-1.amazonaws.com/";

const EditUpload = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    let state = {
        title: title,
        description: description
    }
    
    function handleSubmit(e){
        e.preventDefault();
        return fetch(`/api/uploads/editUpload/${props.specificUpload._id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(state)
        }).then(res => res.json())
    }

    if (props.specificUpload.category === "music") {
        color = "yellow"
    }
    if (props.specificUpload.category === "smalltalk") {
        color = "cyan"
    }
    if (props.specificUpload.category === "podcast") {
        color = "orange"
    }
    if (props.specificUpload.category === "asmr") {
        color = "pink"
    }
    if (props.specificUpload.category === "other") {
        color = "lightpurple"
    }
      
    return (
        <div id="EditUpload">
            <div id="AudioCard">
                <div id="AudioCardUpperContent">
                    <img src={awsURL + props.specificUpload.thumbnailFile} alt="audio upload thumbnail"></img>
                    <div id="cardContents">
                        <p id="cardTitleEdit">{props.specificUpload.title}</p>
                    </div>
                </div>
                <div id="controller">
                    <div className={`category-color ${color}`}></div>
                    <audio controls>
                        <source src={awsURL + props.specificUpload.audioFile} type="audio/mpeg"></source>
                    </audio>
                </div>
            </div>
            <div id="formDiv">
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={e => setTitle(e.target.value)}></input>
                    <p id="editUploadTitle">title</p>
                    <textarea id="editDescription" onChange={e => setDescription(e.target.value)}></textarea>
                    <p>description</p>
                    <button type="submit" id="confirmEdit">confirm edit</button>
                </form>
            </div>
        </div>
    )

}

export default EditUpload;