import {fromJS} from 'immutable';

const INITIAL_STATE = fromJS({
  items: [],
  isFetching: false,
  fetched: false
});

function setBudgetCategories(state, budgetCategories) {
  return state
    .set('items', fromJS(budgetCategories))
    .set('fetched', true)
    .set('isFetching', false);
}

function failed(state) {
  return state
    .set('items', fromJS([]))
    .set('fetched', true)
    .set('isFetching', false);
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case 'BUDGET_CATEGORIES_REQUEST':
    return state.set('isFetching', true);
  case 'BUDGET_CATEGORIES_SUCCESS':
    return setBudgetCategories(state, action.response.data);
  case 'BUDGET_CATEGORIES_FAILURE':
    return failed(state);
  }
  return state;
}
