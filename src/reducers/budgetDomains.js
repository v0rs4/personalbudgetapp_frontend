import {fromJS} from 'immutable';

const INITIAL_STATE = fromJS({
  items: [],
  isFetching: false,
  fetched: false
});

function setBudgetDomains(state, budgetDomains) {
  return state
    .set('items', fromJS(budgetDomains))
    .set('fetched', true)
    .set('isFetching', false);
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case 'BUDGET_DOMAINS_REQUEST':
    return state.set('isFetching', true);
  case 'BUDGET_DOMAINS_SUCCESS':
    return setBudgetDomains(state, action.response.data);
  case 'BUDGET_DOMAINS_FAILURE':
    break;
  }
  return state;
}
