import {Map, fromJS} from 'immutable';

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
    // console.log('BUDGET_DOMAINS_REQUEST', action);
    break;
  case 'BUDGET_DOMAINS_SUCCESS':
    // console.log('BUDGET_DOMAINS_SUCCESS', action);
    return setBudgetDomains(state, action.response.data);
  case 'BUDGET_DOMAINS_FAILURE':
    console.log('BUDGET_DOMAINS_FAILURE', action);
    break;
  }
  return state;
}
