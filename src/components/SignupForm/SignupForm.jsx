import React, { Component } from 'react';
import userService from '../../utils/userService';
import { Link } from "react-router-dom";
import styles from "./SignupForm.module.css"

class SignupForm extends Component {
  state = {
    firstName: '',
    email: '',
    userName: '',
    password: '',
    passwordConf: '',
    message: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // Successfully signed up - show GamePage
      this.props.handleSignup();
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.firstName && this.state.email && this.state.userName && this.state.password.length > 5 && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div id={styles.SignUpForm}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <input type="text" placeholder="first name" value={this.state.name} name="firstName" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <input type="email" placeholder="email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <input type="text" placeholder="userName" value={this.state.userName} name="userName" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <input type="password" placeholder="password" value={this.state.password} name="password" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <input type="password" placeholder="confirm password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <button className={this.isFormInvalid()} disabled={this.isFormInvalid()}>sign up</button>
              <Link to='/'>cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;