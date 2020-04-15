import React from "react";
import Header from "../Header/Header";
import AudioCard from "../AudioCard/AudioCard";
import styles from "./Main.module.css";

const Main = () => {
    return (
        <div id={styles.Main} className="contracted-main">
            <Header />
            <div id={styles.innerMain}>
                <AudioCard />
            </div>
        </div>
    )
}

export default Main;