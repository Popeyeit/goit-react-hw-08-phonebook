import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from '../../redux/auth/authOperations';
import './Login.css';
const INITIAL_STATE = {
  email: '',
  password: '',
};
class Login extends Component {
  state = {
    ...INITIAL_STATE,
  };
  changeState = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.login({
      ...this.state,
    });
    this.setState({
      ...INITIAL_STATE,
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="reg-container">
        <form onSubmit={this.handleSubmit} className="form">
          <p> Email: </p>
          <input
            className="form-item"
            type="email"
            name="email"
            value={email}
            onChange={this.changeState}
          />
          <p> Password: </p>
          <input
            className="form-item"
            type="password"
            name="password"
            value={password}
            onChange={this.changeState}
          />
          <button className="form-btn"> Login </button>
          <p>
            Do not you have any an account ? Please
            <NavLink to="/register"> Signup </NavLink> .
          </p>
        </form>
      </div>
    );
  }
}
export default connect(null, {
  login,
})(Login);
