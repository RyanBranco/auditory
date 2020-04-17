import React from "react";
import UploadListCard from "../../components/UploadListCard/UploadListCard";
import "./ProfileUploads.css"

const ProfileUploads = (props) => {
    return (
        <div id="profileSubDiv">
            {props.userUploads.map((upload) => 
                <UploadListCard 
                    upload={upload}
                    key={upload._id}
                />
            )}
        </div>
    )
}

export default ProfileUploads;