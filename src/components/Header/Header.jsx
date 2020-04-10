import React from "react";
import Logo from "../../images/auditorylogodarkmode.png"
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div id={styles.Header}>
            <img src={Logo} alt="auditory logo" className="small-icon"></img>
            <hr />
        </div>
    )
}

export default Header;