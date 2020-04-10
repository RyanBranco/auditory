import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Main.module.css";

const Main = () => {
    return (
        <div id={styles.Main} className="contracted-main">
            <Header />
        </div>
    )
}

export default Main;