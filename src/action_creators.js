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
export function fetchBudgetDomains(accessToken) {
  return dispatch => {
    API.fetchBudgetDomains(accessToken).then(body => {
      dispatch(setBudgetDomains(body.data))
    });
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
  return dispatch => {
    API.authenticate(username, password).then(body => {
      dispatch(setAccessToken(body.access_token));
    });
  }
}
export function retrieveToken(){
  return dispatch => {
    let accessToken = localStorage.getItem('accessToken');
    dispatch(setAccessToken(accessToken));
  }
}
export function fetchBudgetDomains() {
  return {
    callAPI: {
      types: ['BUDGET_DOMAINS_REQUEST', 'BUDGET_DOMAINS_SUCCESS','BUDGET_DOMAINS_FAILURE'],
      endpoint: '/api/v1/budget_domains',
      authorization: true,
    }
  }
}
export function authorizeAccessToken() {
  return {
    callAPI: {
      types: ['TOKEN_INFO_REQUEST', 'TOKEN_INFO_SUCCESS','TOKEN_INFO_FAILURE'],
      endpoint: '/oauth/token/info',
      authorization: true
    },
    redirectProtocol: function(action, _store) {
      if (action.type === 'TOKEN_INFO_FAILURE') {
        hashHistory.push('/sign_in') // TODO: add redux router
      }
    }
  };
}
