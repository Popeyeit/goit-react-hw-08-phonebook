import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import {
  NavLink
} from 'react-router-dom';
import {
  register
} from '../../redux/auth/authOperations';
import './Registration.css';
const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};
class Register extends Component {
  state = {
    ...INITIAL_STATE,
  };
  changeState = ({
    target
  }) => {
    const {
      name,
      value
    } = target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log({
      ...this.state,
    });
    this.props.register({
      ...this.state,
    });
    this.setState({
      ...INITIAL_STATE,
    });
  };
  render() {
    const {
      name,
      email,
      password
    } = this.state;
    return ( <
      div className = 'reg-container' >
      <
      form onSubmit = {
        this.handleSubmit
      }
      className = "form" >
      <
      p > Name: < /p>{' '} <
      input className = "form-item"
      type = "text"
      name = "name"
      value = {
        name
      }
      onChange = {
        this.changeState
      }
      />{' '} <
      p > Email: < /p>{' '} <
      input className = "form-item"
      type = "email"
      name = "email"
      value = {
        email
      }
      onChange = {
        this.changeState
      }
      />{' '} <
      p > Password: < /p>{' '} <
      input className = "form-item"
      type = "password"
      name = "password"
      value = {
        password
      }
      onChange = {
        this.changeState
      }
      />{' '} <
      button className = "form-btn" > Signup < /button>{' '} <
      p >
      Do you have an account ? So you can < NavLink to = "login" > login < /NavLink>{' '} <
      /p> <
      /form> <
      /div>
    );
  }
}

export default connect(null, {
  register,
})(Register);