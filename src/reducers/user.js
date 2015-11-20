import {fromJS} from 'immutable';

function setAccessToken(state, accessToken) {
  return state.set('accessToken', accessToken);
}

const INITIAL_STATE = fromJS({
  accessToken: undefined,
  signedIn: false
});

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case 'SET_ACCESS_TOKEN':
    return setAccessToken(state, action.accessToken);
  case 'AUTHENTICATE_REQUEST':
    break;
  case 'AUTHENTICATE_SUCCESS':
    return state
      .set('accessToken', action.response.access_token)
      .set('signedIn', true);
  case 'AUTHENTICATE_FAILURE':
    return state.set('signedIn', false);
  case 'TOKEN_INFO_REQUEST':
    break;
  case 'TOKEN_INFO_SUCCESS':
    return state.set('signedIn', true);
  case 'TOKEN_INFO_FAILURE':
    return state.set('signedIn', false);
  }
  return state;
}
