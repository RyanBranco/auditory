import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import ProfileUploads from "../../components/ProfileUploads/ProfileUploads";
import ProfileNav from "../../components/ProfileNav/ProfileNav";
import "./ProfilePage.css";

const ProfilePage = (props) => {
    let { path } = useRouteMatch();
    return (
        <div id="ProfilePage" className="contracted-main">
            <UserProfileCard
                loggedUser={props.loggedUser}
                componentDidMount={props.componentDidMount}
                user={props.user}
            />
            <ProfileNav
                getSelected={props.getSelected}
                selectedProfileUrl={props.selectedProfileUrl}
            />
            <div id="bottom-div">
                <Switch>
                    <Route path={`${path}/uploads`}>
                        <ProfileUploads
                            handleUploadDelete={props.handleUploadDelete}
                            userUploads={props.userUploads}
                            user={props.user}
                        />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default ProfilePage;