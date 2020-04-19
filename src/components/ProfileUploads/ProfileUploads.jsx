import React from "react";
import UploadListCard from "../../components/UploadListCard/UploadListCard";
import "./ProfileUploads.css"

const ProfileUploads = (props) => {
    return (
        <div id="profileSubDiv">
            {props.userUploads.map((upload, idx) => 
                <UploadListCard
                    index={idx}
                    getSpecificUpload={props.getSpecificUpload}
                    componentDidMount={props.componentDidMount}
                    handleUploadDelete={props.handleUploadDelete}
                    upload={upload}
                    uploadId={upload._id}
                    key={upload._id}
                />
            )}
        </div>
    )
}

export default ProfileUploads;