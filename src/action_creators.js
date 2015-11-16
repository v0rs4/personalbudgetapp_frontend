import * as API from './utils/api';

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

export function authorize(accessToken) {
  return dispatch => {
    API.fetchTokenInfo(accessToken)
    .then(body => {
      dispatch(setAccessToken(accessToken));
    })
    .catch(error => {
      if (error.response.status == 401) {
        console.log('redirect to /sign_in')
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

// export function createBudgetDomainWithApi(budgetDomain) {
//   return dispatch => {

//   }
// }
