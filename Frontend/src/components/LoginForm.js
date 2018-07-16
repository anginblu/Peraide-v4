import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, getUser } from '../actions/authActions'
import { Redirect, Link} from 'react-router-dom'

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
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

    this.props.login(this.state);
    this.props.history.replace('/');
  }

  render() {

    const { error } = this.props;

    return (
      <div>
      <h2>Please Sign In.</h2>

      <form onSubmit={e => this.handleSubmit(e)}>
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

        {error && <strong>{error}</strong>}
        <div>
          <button type="submit">Login</button><br/><br/>
          <Link to="/register" className="btn btn-link">Register</Link>
        </div>
      </form>
      </div>
    )
  };
};


function mapStateToProps(state) {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login: login
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
