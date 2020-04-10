import React, { Component } from "react";
import SideBar from "./components/SideBar/SideBar";
import Main from "./components/Main/Main";
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
        <SideBar />
        <Main />
      </div>
    );
  }
}

export default App;
