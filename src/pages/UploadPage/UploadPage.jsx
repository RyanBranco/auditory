import React from "react";
import {useDropzone} from 'react-dropzone'
import styles from "./UploadPage.module.css";

const UploadPage = () => {
    const {getRootProps, getInputProps} = useDropzone()

    return (
        <div id={styles.UploadPage} className="contracted-main">
        <h5>upload</h5>
            <div id={styles.dragAndDrop} {...getRootProps()}>
                <input {...getInputProps()} />
                <p>drop files here, or click to select files</p>
            </div>
        </div>
    )
}

export default UploadPage;