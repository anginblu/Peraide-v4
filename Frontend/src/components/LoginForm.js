import React, { Component } from 'react'
import { Redirect, Link} from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import renderField from '../RenderField'
import Validation from '../Validation'
import Logo from '../Logo'

const LoginForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props;
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
