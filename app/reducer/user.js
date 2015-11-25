import merge from 'lodash/object/merge';

const INITIAL_STATE = {
  accessToken: undefined,
  signedIn: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case 'SET_ACCESS_TOKEN':
    return merge({}, state, {
      accessToken: action.accessToken
    });
  case 'AUTHENTICATE_REQUEST':
    break;
  case 'AUTHENTICATE_SUCCESS':
    return merge({}, state, {
      accessToken: action.response.access_token,
      signedIn: true
    });
  case 'TOKEN_INFO_REQUEST':
    break;
  case 'TOKEN_INFO_SUCCESS':
    return merge({}, state, {
      signedIn: true
    });
  case 'AUTHENTICATE_FAILURE':
  case 'TOKEN_INFO_FAILURE':
  case 'SIGN_OUT':
    return merge({}, state, {
      accessToken: undefined,
      signedIn: false
    });
  }
  return state;
}
