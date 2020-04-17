import React from "react";
import { Link } from "react-router-dom";
import "./SideBarContent.css";

const SideBarContent = (props) => {
    let sideBar = props.user ?
        <div id="SideBarContent">
            <div>     
                <Link to="/"><p>home</p></Link>
                <Link to="/upload"><p>upload</p></Link>
                <div className="divider"></div>
            </div>
            <div id="middle">
                <Link to="/profile/uploads"><p>profile</p></Link>
            </div>
            <div id="bottom">
                <div className="divider"></div>
                <Link to='/settings'><p>setttings</p></Link>
                <Link to='' onClick={props.handleLogout} id="logout-button"><p>logout</p></Link>
            </div>
        </div>
        :
        <div id="LoginSideBar">
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