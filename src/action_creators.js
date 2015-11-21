// Server api related functions
import * as Utils from './utils';
// Hash history
import { pushState } from 'redux-router';
// Action Creators
export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}
export function setBudgetDomains(budgetDomains) {
  return {
    type: 'SET_BUDGET_DOMAINS',
    budgetDomains
  };
}
export function setAccessToken(accessToken){
  return {
    type: 'SET_ACCESS_TOKEN',
    accessToken: accessToken
  };
}
export function setAuthenticated(){
  return {
    type: 'SET_AUTHENTICATED'
  };
}
export function signIn(username, password) {
  return {
    apiMiddleware: {
      types: ['AUTHENTICATE_REQUEST', 'AUTHENTICATE_SUCCESS', 'AUTHENTICATE_FAILURE'],
      caller: (api) => {
        return api.authenticate(username, password);
      },
      after: (action, dispatch, getState) => {
        if(action.type === 'AUTHENTICATE_SUCCESS') {
          const nextPath = getState().router.location.query.nextPath || '/';
          Utils.saveToken(action.response.access_token);
          dispatch(pushState(null, nextPath));
        }
      }
    }
  };
}
export function checkUserSignedIn({ redirectUrl = '/' }) {
  return (dispatch, getState) => {
    const userSignedIn = getState().user.get('signedIn');
    userSignedIn && dispatch(pushState(null, redirectUrl));
  };
}
export function fetchBudgetDomains() {
  return {
    apiMiddleware: {
      types: ['BUDGET_DOMAINS_REQUEST', 'BUDGET_DOMAINS_SUCCESS','BUDGET_DOMAINS_FAILURE'],
      caller: (api, getState) => {
        const { accessToken } = getState().user.toJS();
        return api.fetchBudgetDomains(accessToken);
      }
    }
  };
}
export function authenticateUser() {
  return {
    apiMiddleware: {
      types: ['TOKEN_INFO_REQUEST', 'TOKEN_INFO_SUCCESS','TOKEN_INFO_FAILURE'],
      caller: (api, getState) => {
        const { accessToken } = getState().user.toJS();
        return api.fetchTokenInfo(accessToken);
      },
      after: (action, dispatch, getState) => {
        if (action.type === 'TOKEN_INFO_FAILURE') {
          const nextPath = getState().router.location.pathname;
          dispatch(pushState(null, '/sign_in', { nextPath }));
        }
      }
    }
  };
}
