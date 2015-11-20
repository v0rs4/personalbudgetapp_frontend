// Server api related functions
import * as API from './utils/api';
// Hash history
import createHistory from 'history/lib/createHashHistory';
const hashHistory = createHistory();
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
    callAPI: {
      types: ['AUTHENTICATE_REQUEST', 'AUTHENTICATE_SUCCESS', 'AUTHENTICATE_FAILURE'],
      caller: (api) => {
        return api.authenticate(username, password)
      }
    },
    redirectProtocol: function(action) {
      if (action.type === 'AUTHENTICATE_SUCCESS') {
        hashHistory.push('/') // TODO: add redirectTo feature
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
    callAPI: {
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
    callAPI: {
      types: ['TOKEN_INFO_REQUEST', 'TOKEN_INFO_SUCCESS','TOKEN_INFO_FAILURE'],
      caller: (api, getState) => {
        const { accessToken } = getState().user.toJS();
        return api.fetchTokenInfo(accessToken);
      }
    },
    redirectProtocol: (action) => {
      if (action.type === 'TOKEN_INFO_FAILURE') {
        hashHistory.push('/sign_in') // TODO: add redux router
      }
    }
  };
}
