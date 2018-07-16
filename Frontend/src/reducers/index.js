import { combineReducers } from 'redux';
import { authenticationErrored, authenticationLoading, authentication, logOut } from './authReducer';


const rootReducer =  combineReducers({
  authenticationErrored, authenticationLoading, authentication, logOut
});


export default rootReducer;
