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
export function authorizeAccessToken(accessToken) {
  return dispatch => {
    API.fetchTokenInfo(accessToken)
    .then(body => {
      dispatch(setAccessToken(accessToken));
      dispatch(setAuthenticated());
    })
    .catch(error => {
      if (error.response.status == 401) {
        hashHistory.push('/sign_in') // redux router
      }
    })
  }
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
}
// export function saveToken(accessToken){
//   return dispatch => {
//     localStorage.setItem('accessToken', accessToken)
//   }
// }
