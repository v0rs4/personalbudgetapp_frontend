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

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'CREATE_BUDGET_DOMAIN':
    return createBudgetDomain(state, action.budgetDomain);
  case 'SET_BUDGET_DOMAINS':
    return setBudgetDomains(state, action.budgetDomains);
  case 'SET_ACCESS_TOKEN':
    return setAccessToken(state, action.accessToken)
  }
  return state;
}
