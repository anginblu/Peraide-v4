import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth_actions'

class LogoutForm extends Component {

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }


  render() {
    return(
      <button className="logout-button" onClick={(event) => this.handleLogout(event)}>Logout</button>
    )
  }
}

export default connect(null, {logout})(LogoutForm);
