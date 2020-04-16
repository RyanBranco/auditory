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
    uploads: []
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  async componentDidMount() {
    const uploads = await uploadsAPI.getUploads();
    this.setState({ uploads });
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
          <WebPage
            uploads={this.state.uploads}
            handleLogout={this.handleLogout}
            user={this.state.user}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
