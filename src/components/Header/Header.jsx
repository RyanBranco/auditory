import React from "react";
import Logo from "../../images/auditorylogodarkmode.png"
import "./Header.css";

const Header = () => {
    return (
        <div className="header-expanded" id="Header">
            <span><img src={Logo} alt="auditory logo" className="smallIcon"></img></span>
            <span id="search">
                <input placeholder="Search"></input>
            </span>
            <div className="switch">
                <label>
                    <span><i className="material-icons">wb_sunny</i></span>
                    <input type="checkbox"></input>
                    <span className="lever"></span>
                    <span className="icon">&#9790;</span>
                </label>
            </div>
        </div>
    )
}

export default Header;