import React, { Component } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {signUp} from '../actions/auth_actions';

//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;

  if (!values.username || values.username.trim() === '') {
    errors.username = 'Enter username';
    hasErrors = true;
  }
  if (!values.email || values.email.trim() === '') {
    errors.email = 'Enter email';
    hasErrors = true;
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Enter password';
    hasErrors = true;
  }
  return hasErrors && errors;
}

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        email: '',
        password: ''
      },
      submitted: false,
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({submitted: true});
    const { user } = this.state;

    if (!user.validate) {
      this.props.signUp(user);
      this.props.history.replace('/')
    }
  }

  render() {
    return (
      <div className='form-inline'>
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="email"
            onChange={e => this.setState({email: e.target.value})}
          />
          <input
            className="form-control"
            type="password"
            placeholder="password"
            onChange={e => this.setState({password: e.target.value})}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={(e) => this.handleSubmit(e)}
          >
          Sign Up
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterForm);
export { connectedRegisterPage as RegisterForm };
