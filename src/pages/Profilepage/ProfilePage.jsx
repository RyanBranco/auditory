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
                user={props.user}
            />
            <ProfileNav />
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