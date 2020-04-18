import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./ProfileNav.css";

const ProfileNav = (props) => {
    let { url } = useRouteMatch();
    return (
        <div className="profile-nav">
            <Link to={`${url}/uploads`}><p className="profile-nav-item" onClick={() => props.getSelected(0)} id={props.selectedProfileUrl[0]}>my uploads</p></Link>
            <Link to={`${url}/following`}><p className="profile-nav-item" onClick={() => props.getSelected(1)}  id={props.selectedProfileUrl[1]}>following</p></Link>
            <Link to={`${url}/liked`}><p className="profile-nav-item" onClick={() => props.getSelected(2)} id={props.selectedProfileUrl[2]}>liked</p></Link>
            <Link to={`${url}/disliked`}><p className="profile-nav-item" onClick={() => props.getSelected(3)} id={props.selectedProfileUrl[3]}>disliked</p></Link>
            <Link to={`${url}/playlists`}><p className="profile-nav-item" onClick={() => props.getSelected(4)} id={props.selectedProfileUrl[4]}>playlists</p></Link>
        </div>
    )
}

export default ProfileNav;