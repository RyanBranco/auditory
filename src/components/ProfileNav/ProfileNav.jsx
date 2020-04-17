import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./ProfileNav.css";

const ProfileNav = () => {
    let { url } = useRouteMatch();
    return (
        <div className="profile-nav">
            <Link to={`${url}/uploads`}><p className="profile-nav-item">my uploads</p></Link>
            <Link to={`${url}/following`}><p className="profile-nav-item">following</p></Link>
            <Link to={`${url}/liked`}><p className="profile-nav-item">liked</p></Link>
            <Link to={`${url}/disliked`}><p className="profile-nav-item">disliked</p></Link>
            <Link to={`${url}/playlists`}><p className="profile-nav-item">playlists</p></Link>
        </div>
    )
}

export default ProfileNav;