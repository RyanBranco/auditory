import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import WebPage from "../WebPage/WebPage";
import userService from '../../utils/userService';
import * as uploadsAPI from '../../services/uploads-api';
import "./App.css";

class App extends Component {
  state = {
    user: userService.getUser(),
    redirect: false,
    uploads: [],
    userUploads: []
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleUploadDelete= async id => {
    await uploadsAPI.deleteOne(id);
    this.setState(state => ({
      userUploads: state.userUploads.filter(p => p._id !== id),
      uploads: state.uploads.filter(p => p._id !== id)
    }), () => this.props.history.push('/'));
  }

  async componentDidMount() {
    const uploads = await uploadsAPI.getUploads();
    const userUploads = await uploadsAPI.getUserUploads(this.state.user._id);
    this.setState({
      uploads,
      userUploads
    });
  }

  async componentDidUpdate() {
    const uploads = await uploadsAPI.getUploads();
    const userUploads = await uploadsAPI.getUserUploads(this.state.user._id);
    this.setState({
      uploads,
      userUploads
    });
  }

  render() {
    return (
      <div id="App">
        <Switch>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          }/>
          <Route path="/" render={({ history }) => 
                    <WebPage
                    history={history}
                    handleUploadDelete={this.handleUploadDelete}
                    userUploads={this.state.userUploads}
                    uploads={this.state.uploads}
                    handleLogout={this.handleLogout}
                    user={this.state.user}
                  />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
