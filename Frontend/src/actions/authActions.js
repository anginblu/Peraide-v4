import fetch from 'isomorphic-fetch';

const API_URL = "http://localhost:3000/api/v1"

const authSuccess = (user, token) => {
  return {
    type: 'AUTHENTICATION_SUCCESS',
    user: user,
    token: token
  }
}

const authFailure = (errors) => {
  return {
    type: 'AUTHENTICATION_FAILURE',
    errors: errors.message
  }
}

const loggedIn = (user) => {
  return {
    type: 'LOGGEDIN',
    user: user
  }
}

export const register = (user) => {

  return dispatch => {

    return fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user: user})
    })

    .then(res => res.json())

    .then(res => {
      const { user, token } = res
      localStorage.setItem('Token', token);
      dispatch(authSuccess(user, token))
    })

    .catch( error => {
      console.log(error);
      dispatch(authFailure(error))
      localStorage.clear()
    })

  }
}


export const login = (userData) => {

  return dispatch => {

      return fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      })

        .then(res => res.json())

        .then((res) => {

          if (res.errors) {
            throw Error(res.errors);
          }
          else if (res.token){
            const { user, token } = res
            localStorage.setItem('Token', token);
            dispatch(authSuccess(user, token))
          }
        })

        .catch( error => {
          console.log(error);
          dispatch(authFailure(error))
          localStorage.clear()
        })
  }
}

export const getUser = (token) => {

  return dispatch => {
    return fetch(`${API_URL}/find_user`, {
      method: 'POST',
      headers: {
        'Authorization': localStorage.Token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({token: token})
    })

    .then((res) => res.json())

    .then((res) => {
      if (res.errors) {
        throw Error(res.errors);
      }
      else{
        dispatch(loggedIn(res))
      }
    })

    .catch((error) => {
      console.log(error)
      localStorage.clear()
    })

  }
}

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    return dispatch({type: 'LOGGEDOUT'});
  }
}
