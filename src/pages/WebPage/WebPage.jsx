import React from "react";
import { Switch, Route } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import Main from "../../components/Main/Main";
import UploadPage from "../UploadPage/UploadPage";
import ProfilePage from "../Profilepage/ProfilePage";

const WebPage = (props) => {
    return(
        <div>
            <SideBar
                handleLogout={props.handleLogout}
                user={props.user}
            />
            <Switch>
                <Route exact path="/" render={() =>
                    <Main
                        uploads={props.uploads}
                        user={props.user}
                    />
                }/>
                <Route exact path="/upload" render={() => 
                    <UploadPage
                        user={props.user}
                    />
                }/> 
                <Route path="/profile" render={() =>
                    <ProfilePage 
                        userUploads={props.userUploads}
                        user={props.user}
                    />
                } />
            </Switch>
        </div>
    )
}

export default WebPage;