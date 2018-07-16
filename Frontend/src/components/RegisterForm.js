import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {register} from '../actions/authActions';

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

class RegisterForm extends Component {
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
      this.props.register(user);
      this.props.history.replace('/')
    }
  }

  render() {
    return (
      <div className='form-inline'>
        <h2>Register</h2>
        <div className="form-group">

          <form onSubmit={e => this.handleSubmit(e)}>

              <label>Username:</label>
              <input
              name="username"
              className="form-control"
              type="text" placeholder="Please choose a username"
              onChange={e => this.setState({username: e.target.value})}
              value={this.state.username}
              /><br/>

              <label>Email:</label>
              <input
              name="email"
              className="form-control"
              type="text" placeholder="Please enter your email"
              onChange={e => this.setState({email: e.target.value})}
              value={this.state.email}
              /><br/>

              <label>Password:</label>
              <input
              name="password"
              className="form-control"
              type="password" placeholder="Please choose a password"
              onChange={e => this.setState({password: e.target.value})}
              value={this.state.password}
              /><br/>

              <button type="submit" className="btn custom-btn">Register</button>
            </form>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    register: register
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
