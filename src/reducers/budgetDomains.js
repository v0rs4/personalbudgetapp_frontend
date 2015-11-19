import {Map, fromJS} from 'immutable';

function setBudgetDomains(state, budgetDomains) {
  return state.set('budgetDomains', fromJS(budgetDomains));
}

export default function(state = Map(), action) {
  switch(action.type) {
    case 'BUDGET_DOMAINS_REQUEST':
      break;
    case 'BUDGET_DOMAINS_SUCCESS':
      return setBudgetDomains(state, action.response.data);
    case 'BUDGET_DOMAINS_FAILURE':
      break;
  }
  return state;
}
