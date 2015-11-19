import {Map, fromJS} from 'immutable';

// TODO: split into separate reducers

function setState(state, newState) {
  return state.merge(newState);
}

function createBudgetDomain(state, budgetDomain)  {
  return state.get('budgetDomains').push(fromJs(budgetDomain));
}

function setBudgetDomains(state, budgetDomains) {
  return state.set('budgetDomains', fromJS(budgetDomains));
}

function setAccessToken(state, accessToken) {
  return state.set('accessToken', accessToken);
}

function setAuthenticated(state) {
  return state.set('authenticated', true);
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'CREATE_BUDGET_DOMAIN':
    return createBudgetDomain(state, action.budgetDomain);
  case 'SET_BUDGET_DOMAINS':
    return setBudgetDomains(state, action.budgetDomains);
  case 'SET_ACCESS_TOKEN':
    return setAccessToken(state, action.accessToken);
  case 'SET_AUTHENTICATED':
    return setAuthenticated(state);
  case 'BUDGET_DOMAINS_REQUEST':
    break;
  case 'BUDGET_DOMAINS_SUCCESS':
    return setBudgetDomains(state, action.response.data);
  case 'BUDGET_DOMAINS_FAILURE':
    break;
  case 'TOKEN_INFO_REQUEST':
    break;
  case 'TOKEN_INFO_SUCCESS':
    return setAuthenticated(state);
  case 'TOKEN_INFO_FAILURE':
    break;
  case 'AUTHENTICATE_REQUEST':
    break;
  case 'AUTHENTICATE_SUCCESS':
    return state
      .set('accessToken', action.response.access_token)
      .set('authenticated', true);
  case 'AUTHENTICATE_FAILURE':
    break;
  }
  return state;
}
