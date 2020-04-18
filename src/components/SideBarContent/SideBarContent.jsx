import React from "react";
import { Link } from "react-router-dom";
import "./SideBarContent.css";

const SideBarContent = (props) => {
    let url = "/profile";
    let sideBar = props.user ?
        <div id="SideBarContent">
            <div>     
                <Link to="/"><p>home</p></Link>
                <Link to="/upload"><p>upload</p></Link>
                <div className="divider"></div>
            </div>
            <div id="middle">
                <p>profile</p>
                <Link to={`${url}/uploads`}><p className="sub-nav-item" onClick={() => props.getSelected(0)}>my uploads</p></Link>
                <Link to={`${url}/following`}><p className="sub-nav-item" onClick={() => props.getSelected(1)}>following</p></Link>
                <Link to={`${url}/liked`}><p className="sub-nav-item" onClick={() => props.getSelected(2)}>liked</p></Link>
                <Link to={`${url}/disliked`}><p className="sub-nav-item" onClick={() => props.getSelected(3)}>disliked</p></Link>
                <Link to={`${url}/playlists`}><p className="sub-nav-item" onClick={() => props.getSelected(4)}>playlists</p></Link>
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