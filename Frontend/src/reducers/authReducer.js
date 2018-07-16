const initState = {
  isAuthenticated: false,
  isAuthenticating: false,
  currentUser: {},
  token: null,
  errors: {}
}

export function authenticationLoading(state = initState, action) {
  switch (action.type) {
      case 'AUTHENTICATION_REQUEST':
        return {...state, isAuthenticating: true}
      default:
          return state;
  }
}

export function authenticationErrored(state = initState, action) {
    switch (action.type) {
      case 'AUTHENTICATION_FAILURE':
        return {
          isAuthenticated: false,
          isAuthenticating: false,
          currentUser: {},
          token: null,
          errors: action.errors || {}
        }
      default:
        return state;
    }
}

export function authentication (state = initState, action) {
  switch(action.type) {
    case 'AUTHENTICATION_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        isAuthenticating: false,
        currentUser: action.user,
        token: action.token
      }

    default:
      return state;
  }
}

export function logOut(state = initState, action) {
    switch (action.type) {
      case 'LOGOUT':
        return Object.assign({}, initState)

      default:
        return state;
    }
}
