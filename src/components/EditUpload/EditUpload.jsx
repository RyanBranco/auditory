import React, { useState } from 'react';
import "./EditUpload.jsx";

const EditUpload = (props) => {
    function handleChange(e){
        this.setState({
          [e.target.name]: e.target.value
        });
      }
    
    function handleSubmit(e){
        e.preventDefault();

    }
      
    return (
        <div id="EditUpload">
            <form onSubmit={handleSubmit}>
                <p>here</p>
            </form>
        </div>
    )

}

export default EditUpload;