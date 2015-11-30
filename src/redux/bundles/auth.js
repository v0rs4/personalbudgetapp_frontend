import merge from 'lodash.merge';
import * as utils from 'utils';

const SET_ACCESS_TOKEN = 'auth/set_access_token';
const LOGIN_REQUEST = 'auth/login_request';
const LOGIN_SUCCESS = 'auth/login_success';
const LOGIN_FAILURE = 'auth/login_failure';
const LOGOUT_REQUEST = 'auth/logout_request';
const LOGOUT_SUCCESS = 'auth/logout_success';
const LOGOUT_FAILURE = 'auth/logout_failure';
const TOKEN_INFO_REQUEST = 'auth/token_info_request';
const TOKEN_INFO_SUCCESS = 'auth/token_info_success';
const TOKEN_INFO_FAILURE = 'auth/token_info_failure';

const INITIAL_STATE = {
  accessToken: undefined,
  user: undefined,
  loggingIn: false,
  loggedIn: false,
  loggingOut: false,
  loggedOut: false
};

export default function(state = INITIAL_STATE, action){
  switch(action.type) {
  case SET_ACCESS_TOKEN:
    return merge({}, state, {
      accessToken: action.accessToken
    });
  case LOGIN_REQUEST:
    return merge({}, state, {
      loggingIn: true
    });
  case LOGIN_SUCCESS:
    return merge({}, state, {
      loggingIn: false,
      loggedIn: true,
      accessToken: action.response.accessToken,
      user: action.user
    });
  case LOGIN_FAILURE:
    return merge({}, state, {
      loggingIn: false
    });
  case LOGOUT_REQUEST:
    return merge({}, state, {
      loggingOut: true
    });
  case LOGOUT_SUCCESS:
    return merge({}, state, {
      loggingOut: false,
      loggedOut: true,
      loggedIn: false,
      accessToken: undefined,
      user: undefined
    });
  case LOGOUT_FAILURE:
    return merge({}, state, {
      loggingOut: false
    });
  case TOKEN_INFO_REQUEST:
    return merge({}, state, {
      loggingIn: true
    });
  case TOKEN_INFO_SUCCESS:
    return merge({}, state, {
      loggingIn: false,
      loggedIn: true
    });
  case TOKEN_INFO_FAILURE:
    break;
  }
  return state;
}

export function isLoggedIn(globalState) {
  return globalState.auth.loggedIn;
}

export function login(username, password){
  return {
    apiMiddleware: {
      types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
      caller: (api) => {
        return api.authenticate(username, password);
      }
      // , after: (action, dispatch, getState) => {
      //   if(action.type === 'LOGIN_SUCCESS') {
      //     const nextPath = getState().router.location.query.nextPath || '/';
      //     utils.saveToken(action.response.access_token);
      //     dispatch(pushState(null, nextPath));
      //   }
      // }
    }
  };
}

export function authenticateUser(){
  return {
    apiMiddleware: {
      types: [TOKEN_INFO_REQUEST, TOKEN_INFO_SUCCESS, TOKEN_INFO_FAILURE],
      caller: (api, getState) => {
        const { accessToken } = getState().auth;
        return api.fetchTokenInfo(accessToken);
      }
      // , after: (action, dispatch, getState) => {
      //   if (action.type === 'TOKEN_INFO_FAILURE') {
      //     const nextPath = getState().router.location.pathname;
      //     dispatch(pushState(null, '/sign_in', { nextPath }));
      //   }
      // }
    }
  };
}

export function logout() {
  return (dispatch) => {
    utils.removeToken();
    dispatch({
      type: 'SIGN_OUT'
    });
  };
}

export function setAccessToken(accessToken) {
  return {
    type: SET_ACCESS_TOKEN,
    accessToken
  };
}
