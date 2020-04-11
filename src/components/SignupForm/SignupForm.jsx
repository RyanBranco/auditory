import React, { Component } from 'react';
import userService from '../../utils/userService';

class SignupForm extends Component {

  state = {
    firstName: '',
    email: '',
    userName: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.firstName]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.firstName && this.state.email && this.state.password && this.state.userName === this.state.passwordConf);
  }

  render() {
    return (
      <div>
        <header>Sign Up</header>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <input type="text" placeholder="First name" value={this.state.name} name="firstName" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <input type="text" placeholder="UserName" value={this.state.email} name="userName" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <input type="password" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <button disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;