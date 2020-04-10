import React, { Component } from "react";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <SideBar />
      </div>
    );
  }
}

export default App;
