import React from "react";
import SideBarContent from "../SideBarContent/SideBarContent";
import SideBarHeader from "../SideBarHeader/SideBarHeader"
import "./SideBar.css"

const SideBar = (props) => {
    return (
        <div id="SideBar" className="expanded-side-bar">
            <SideBarHeader />
            <SideBarContent
                componentDidMount={props.componentDidMount}
                getSelected={props.getSelected}
                selectedProfileUrl={props.selectedProfileUrl}
                handleLogout={props.handleLogout}
                user={props.user} 
            />
        </div>
    )
}

export default SideBar;