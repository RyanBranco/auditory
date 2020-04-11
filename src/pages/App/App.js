import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import WebPage from "../WebPage/WebPage";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
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
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/' render={() =>
            <WebPage />
          }/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
