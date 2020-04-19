import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import ProfileUploads from "../../components/ProfileUploads/ProfileUploads";
import ProfileNav from "../../components/ProfileNav/ProfileNav";
import EditUpload from "../../components/EditUpload/EditUpload";
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
                    <Route exact path={`${path}/uploads`}>
                        <ProfileUploads
                            getSpecificUpload={props.getSpecificUpload}
                            componentDidMount={props.componentDidMount}
                            handleUploadDelete={props.handleUploadDelete}
                            userUploads={props.userUploads}
                            user={props.user}
                        />
                    </Route>
                    <Route path={`${path}/uploads/edit/`}>
                        <EditUpload
                            uploadIndex={props.uploadIndex}
                            componentDidMount={props.componentDidMount}
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