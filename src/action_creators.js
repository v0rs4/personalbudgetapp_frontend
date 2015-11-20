// Server api related functions
import * as API from './utils/api';
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
export function authenticate(username, password) {
  return {
    apiMiddleware: {
      types: ['AUTHENTICATE_REQUEST', 'AUTHENTICATE_SUCCESS', 'AUTHENTICATE_FAILURE'],
      caller: (api) => {
        return api.authenticate(username, password)
      },
      after: (action, dispatch) => {
        (action.type === 'AUTHENTICATE_SUCCESS') && dispatch(pushState(null, '/'))
      }
    }
  };
}
export function checkAuthenticated() {
  return (dispatch, getState) => {
    const { authenticated } = getState().user.toJS();
    authenticated && hashHistory.push('/')
  }
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
  }
}
export function authorizeAccessToken() {
  return {
    apiMiddleware: {
      types: ['TOKEN_INFO_REQUEST', 'TOKEN_INFO_SUCCESS','TOKEN_INFO_FAILURE'],
      caller: (api, getState) => {
        const { accessToken } = getState().user.toJS();
        return api.fetchTokenInfo(accessToken);
      },
      after: (action, dispatch) => {
        if (action.type === 'TOKEN_INFO_FAILURE') {
          dispatch(pushState(null, '/sign_in'))
        }
      }
    }
  };
}
