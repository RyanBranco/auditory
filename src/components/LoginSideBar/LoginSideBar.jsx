import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginSideBar.module.css"

const LoginSideBar = () => {
    return (
        <div id={styles.LoginSideBar}>
            <p>You must log-in to access</p>
            <p>user features: <Link to="/login">log-in</Link></p>
            <br></br>
            <p>Dont have an account?</p>
            <p><Link to="/signup">sign-up</Link></p>
        </div>
    )
}

export default LoginSideBar;