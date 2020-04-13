import React from "react";
import {useDropzone} from 'react-dropzone'
import styles from "./UploadPage.module.css";

const UploadPage = () => {
    const {getRootProps, getInputProps} = useDropzone()

    return (
        <div id={styles.UploadPage} className="contracted-main">
        <h4>upload</h4>
            <div id={styles.UploadFormContainer}>
                <div className={styles.subDivAudio}>
                    <h5>audio file</h5>
                    <div className={styles.subDiv}>
                        <div id={styles.dragAndDrop} {...getRootProps()}>
                            <input {...getInputProps()} />
                            <i className="fa fa-cloud-upload" id={styles.cloud}></i>
                            <p>drop or click</p>
                        </div>
                        <div id={styles.thumbnailDiv}>
                            <div id={styles.thumbnailBox} {...getRootProps()}>
                                <input {...getInputProps()} />
                                <i className="fa fa-camera" id={styles.thumbnailImage}></i>
                                <p>thumbnail</p>
                            </div>
                        </div>
                        <input placeholder="insert title"></input>
                    </div>
                    <h5 id={styles.detailsH5}>details</h5>
                    <div id={styles.SubSubDiv}>
                        <textarea placeholder="description..." id={styles.descriptionBox}></textarea>
                        <div id={styles.bottomForm}>
                            <select id={styles.category}>
                                <option value="">other</option>
                                <option value="">music</option>
                                <option value="">podcast</option>
                                <option value="">small talk</option>
                            </select>
                            <button id={styles.submitButton}>upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadPage;