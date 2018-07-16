import React from 'react';
import { BrowserRouter as Router, Redirect, Route} from 'react-router-dom'

import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import AboutPage from '../components/AboutPage'
import RegisterForm from '../components/Forms/RegisterForm'
import LoginForm from '../components/Forms/LoginForm'

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
              <NavBar />

              <Route exact path="/" component = {HomePage} />
              <Route exact path="/register" component = {RegisterForm} />
              <Route exact path="/signin" component = {LoginForm} />
              <Route exact path="/about" component = {AboutPage} />
            </div>


        </Router>
        <Footer />
      </div>
    )
  }
}
