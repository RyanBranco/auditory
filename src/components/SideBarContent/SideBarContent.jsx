import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./SideBarContent.css";

const SideBarContent = (props) => {
    let { url } = useRouteMatch();
    let sideBar = props.user ?
        <div id="SideBarContent">
            <div>     
                <Link to="/"><p>home</p></Link>
                <Link to="/upload"><p>upload</p></Link>
                <div className="divider"></div>
            </div>
            <div id="middle">
                <Link to="/profile/uploads"><p>profile</p></Link>
                <Link to={`${url}/uploads`}><p className="sub-nav-item">my uploads</p></Link>
                <Link to={`${url}/following`}><p className="sub-nav-item">following</p></Link>
                <Link to={`${url}/liked`}><p className="sub-nav-item">liked</p></Link>
                <Link to={`${url}/disliked`}><p className="sub-nav-item">disliked</p></Link>
                <Link to={`${url}/playlists`}><p className="sub-nav-item">playlists</p></Link>
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