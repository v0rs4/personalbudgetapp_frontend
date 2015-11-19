import {Map} from 'immutable';

function setAccessToken(state, accessToken) {
  return state.set('accessToken', accessToken);
}

export default function(state = Map(), action) {
  switch(action.type) {
    case 'SET_ACCESS_TOKEN':
      return setAccessToken(state, action.accessToken);
    case 'AUTHENTICATE_REQUEST':
      break;
    case 'AUTHENTICATE_SUCCESS':
      return state
        .set('accessToken', action.response.access_token)
        .set('authenticated', true);
    case 'AUTHENTICATE_FAILURE':
      break;
    case 'TOKEN_INFO_REQUEST':
      break;
    case 'TOKEN_INFO_SUCCESS':
      return state.set('authenticated', true);
    case 'TOKEN_INFO_FAILURE':
      break;
  }
  return state;
}
