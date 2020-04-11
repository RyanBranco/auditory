import React from "react";
import SideBarContent from "../SideBarContent/SideBarContent";
import SideBarHeader from "../SideBarHeader/SideBarHeader"
import styles from "./SideBar.module.css"

const SideBar = (props) => {
    return (
        <div id={styles.SideBar} className="expanded-side-bar">
            <SideBarHeader />
            <SideBarContent user={props.user} />
        </div>
    )
}

export default SideBar;