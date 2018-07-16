import React, { Component } from 'react'
import { Link } from 'react-router';

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  signUp() {
    console.log('this.state', this.state)
    const {email, password} = this.state
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
            onClick={() => this.signUp()}
          >
          Sign Up
          </button>
        </div>
      </div>
    )
  }
}
