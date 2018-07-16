import React from 'react';
import { BrowserRouter as Router, Redirect, Route} from 'react-router-dom'

import RegisterForm from '../components/RegisterForm'

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

            </div>


        </Router>
      </div>
    )
  }
}
