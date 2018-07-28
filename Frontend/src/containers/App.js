import React from 'react';
import { BrowserRouter as Router, Redirect, Route} from 'react-router-dom'

le

import HomePage from './HomePage'

export default class App extends React.Component {

  render(){

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.props.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/register'
              }}
            />
          )}
      />
    )

    return(
      <div className = "App">
        <Router>

            <div className="Content">

              <Route exact path="/" component = {HomePage} />
              <Route exact path="/register" component = {RegisterForm} />
              <Route exact path="/login" component = {LoginForm} />

            </div>


        </Router>
      </div>
    )
  }
}
