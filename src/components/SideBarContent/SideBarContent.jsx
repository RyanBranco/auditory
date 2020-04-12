import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideBarContent.module.css";

const SideBarContent = (props) => {
    let sideBar = props.user ?
        <div>
            <Link to="/"><p>home</p></Link>
            <Link to="/upload"><p>upload</p></Link>
            <Link id={styles.SideBarContent} to='' onClick={props.handleLogout}><p>logout</p></Link>
        </div>
        :
        <div id={styles.LoginSideBar}>
            <p>You must log-in to access</p>
            <p>user features: 
            <Link to="/login"> log-in</Link></p>
            <br></br>
            <p>Dont have an account?</p>
            <p><Link to="/signup"> sign-up</Link></p>
        </div>
    return (
        <div>
            {sideBar}
        </div>
    )
}

export default SideBarContent;