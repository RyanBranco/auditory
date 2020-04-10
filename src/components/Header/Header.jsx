import React from "react";
import Logo from "../../images/auditorylogodarkmode.png"
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className="header-expanded" id={styles.Header}>
            <img src={Logo} alt="auditory logo" className="small-icon"></img>
            <span id={styles.search}>
            <input placeholder="Search"></input>
            </span>
            <div class="switch">
                <label>
                    <span><i class="material-icons">wb_sunny</i></span>
                    <input type="checkbox"></input>
                    <span class="lever"></span>
                    <span className={styles.icon}>&#9790;</span>
                </label>
            </div>
        </div>
    )
}

export default Header;