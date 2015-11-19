import {Map} from 'immutable';

function setSignInParams(state, action) {
  const { username, password } = action
  return state
    .set('username', username)
    .set('password', password);
}

export default function(state = Map(), action) {
  switch(action.type) {
    case 'SET_SIGN_IN_PARAMS':
      return setSignInParams(state, action);
  }
  return state;
}
