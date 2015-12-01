import merge from 'lodash.merge';
import * as utils from 'utils';
import { pushState } from 'redux-router';

const SET_ACCESS_TOKEN = 'auth/set_access_token';
const SIGN_IN_REQUEST = 'auth/sign_in_request';
const SIGN_IN_SUCCESS = 'auth/sign_in_success';
const SIGN_IN_FAILURE = 'auth/sign_in_failure';
const SIGN_OUT_REQUEST = 'auth/sign_out_request';
const SIGN_OUT_SUCCESS = 'auth/sign_out_success';
const SIGN_OUT_FAILURE = 'auth/sign_out_failure';
const TOKEN_INFO_REQUEST = 'auth/token_info_request';
const TOKEN_INFO_SUCCESS = 'auth/token_info_success';
const TOKEN_INFO_FAILURE = 'auth/token_info_failure';

const INITIAL_STATE = {
  accessToken: null,
  isSigningIn: false,
  isSignedIn: false,
  isSigningOut: false,
  isSignedOut: false
};

export default function(state = INITIAL_STATE, action){
  switch(action.type) {
  case SET_ACCESS_TOKEN:
    return merge({}, state, {
      accessToken: action.accessToken
    });
  case SIGN_IN_REQUEST:
    return merge({}, state, {
      isSigningIn: true
    });
  case SIGN_IN_SUCCESS:
    return merge({}, state, {
      isSigningIn: false,
      isSignedIn: true,
      accessToken: action.response.access_token
    });
  case SIGN_IN_FAILURE:
    return merge({}, state, {
      isSigningIn: false
    });
  case SIGN_OUT_REQUEST:
    return merge({}, state, {
      isSigningOut: true
    });
  case SIGN_OUT_SUCCESS:
    return merge({}, state, {
      isSigningOut: false,
      isSignedOut: true,
      isSignedIn: false,
      accessToken: null
    });
  case SIGN_OUT_FAILURE:
    return merge({}, state, {
      isSigningOut: false
    });
  case TOKEN_INFO_REQUEST:
    return merge({}, state, {
      isTokenChecking: true
    });
  case TOKEN_INFO_SUCCESS:
    return merge({}, state, {
      isTokenChecking: false,
      isTokenValid: true,
      isSignedIn: true
    });
  case TOKEN_INFO_FAILURE:
    return merge({}, state, {
      isTokenChecking: false,
      isTokenValid: false,
      isSignedIn: false,
      accessToken: null
    });
  }
  return state;
}

export function redirectIfSignedIn(redirectUrl = '/') {
  return (dispatch, getState) => {
    const { isSignedIn, accessToken } = getState().auth;
    (accessToken || isSignedIn) && dispatch(pushState(null, redirectUrl));
  };
}

export function signIn(username, password){
  return {
    apiMiddleware: {
      types: [SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE],
      caller: (api) => {
        return api.authenticate(username, password);
      },
      after: (action, dispatch, getState) => {
        if(action.type === SIGN_IN_SUCCESS) {
          const nextPath = getState().router.location.query.nextPath || '/';
          utils.saveToken(action.response.access_token);
          dispatch(pushState(null, nextPath));
        }
      }
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
      },
      after: (action, dispatch, getState) => {
        if (action.type === TOKEN_INFO_FAILURE) {
          const nextPath = getState().router.location.pathname;
          dispatch(pushState(null, '/sign_in', { nextPath }));
        }
      }
    }
  };
}

export function signOut() {
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
