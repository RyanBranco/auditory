import React from "react";
import LoginSideBar from "../LoginSideBar/LoginSideBar";
import SideBarHeader from "../SideBarHeader/SideBarHeader"
import styles from "./SideBar.module.css"

const SideBar = () => {
    return (
        <div id={styles.SideBar} className="expanded-side-bar">
            <SideBarHeader />
            <LoginSideBar />
        </div>
    )
}

export default SideBar;