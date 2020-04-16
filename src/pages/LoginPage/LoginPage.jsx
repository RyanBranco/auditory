import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import Logo from "../../images/auditorylogodarkmodewithtext.png"
import "./LoginPage.css";

class LoginPage extends Component {
  state = {
    email: '',
    pw: '',
    error: ''
  };

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      this.setState({error: 'invalid credentials'});
    }
  }

  render() {
    return (
      <div id="LoginPage">
        <img id="LoginPageImg" src={Logo} alt="dark mode logo"></img>
        <form onSubmit={this.handleSubmit} >
          <div>
            <div>
              <input type="email" placeholder="email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <input type="password" placeholder="password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <button>log in</button>
              <Link to='/'>cancel</Link>
              <p>{this.state.error}</p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;