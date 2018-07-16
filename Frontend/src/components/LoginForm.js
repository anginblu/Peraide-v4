import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, getUser } from '../actions/authActions'
import { Redirect, Link} from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'


class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      },
      submitted: false,
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    const { user } = this.state;

    if (!user.validate) {
      this.props.register(user);
      this.props.history.replace('/')
    }
  }

  return (
    <div>
    <Logo/>
    <h2>Please Sign In.</h2>
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        type="text"
        component={renderField}
        label="Email"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>Login</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button><br/>
        <Link to="/register" className="btn btn-link">Register</Link>
      </div>
    </form>
    </div>

  );
};

export default reduxForm({
  form: 'login', // a unique identifier for this form
})(LoginForm);
