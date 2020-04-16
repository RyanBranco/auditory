import React from "react";
import Header from "../Header/Header";
import AudioCard from "../AudioCard/AudioCard";
import styles from "./Main.module.css";

const Main = (props) => (
    <div id={styles.Main} className="contracted-main">
        <Header />
        <div id={styles.innerMain}>
           {props.uploads.map((upload, idx) => 
            <AudioCard
                key={upload._id}
                upload={upload}
            />
           )}
        </div>
    </div>
)

export default Main;