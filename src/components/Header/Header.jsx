import React from "react";
import Logo from "../../images/auditorylogodarkmode.png"
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className="header-expanded" id={styles.Header}>
            <span><img src={Logo} alt="auditory logo" className="small-icon"></img></span>
            <span id={styles.search}>
            <input placeholder="Search"></input>
            </span>
            <div className="switch">
                <label>
                    <span><i className="material-icons">wb_sunny</i></span>
                    <input type="checkbox"></input>
                    <span className="lever"></span>
                    <span className={styles.icon}>&#9790;</span>
                </label>
            </div>
        </div>
    )
}

export default Header;