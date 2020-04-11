import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Main from "../../components/Main/Main";

const WebPage = (props) => {
    return(
        <div>
            <SideBar
                handleLogout={props.handleLogout}
                user={props.user}
            />
            <Main
                user={props.user}
            />
        </div>
    )
}

export default WebPage;