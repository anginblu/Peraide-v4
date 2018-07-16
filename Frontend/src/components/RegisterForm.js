import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {register} from '../actions/authActions';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        email: '',
        password: '',
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.register(this.state);
    this.props.history.replace('/')
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
              onChange={e => this.handleChange(e)}
              value={this.state.username}
              /><br/>

              <label>Email:</label>
              <input
              name="email"
              className="form-control"
              type="text" placeholder="Please enter your email"
              onChange={e => this.handleChange(e)}
              value={this.state.email}
              /><br/>

              <label>Password:</label>
              <input
              name="password"
              className="form-control"
              type="password" placeholder="Please choose a password"
              onChange={e => this.handleChange(e)}
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
