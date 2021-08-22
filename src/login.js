import React, { Component } from 'react';
import {setUserSession} from './Utils/Common'
import './App.css';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
      console.log(this.props);
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    setUserSession(btoa(this.state.username),this.state.username)
    this.props.history.push('/dashboard');
    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {

    return (
      <div className="Login">
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <div className='fieldsContainer'>
            <label className='loginLabel'>User Name</label>
            <input className='inputField' type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
          </div>
         
          <div className='fieldsContainer'>
            <label className='loginLabel'>Password</label>
            <input className='inputField' type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
          </div>    
          

          <button className='loginBtn' type="submit" value="Log In" data-test="submit" onClick={this.handleSubmit}>Log In</button>
      </div>
    );
  }
}

export default LoginPage;