import merge from 'lodash.merge';

const FETCH_REQUEST = 'budgetDomain/transactions/fetchRequest';
const FETCH_SUCCESS = 'budgetDomain/transactions/fetchSuccess';
const FETCH_FAILURE = 'budgetDomain/transactions/fetchFailure';

const INITIAL_STATE = {
  isFetching: false,
  fetched: false,
  items: []
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_REQUEST:
    return merge({}, state, {
      isFetching: true
    });
  case FETCH_SUCCESS:
    return merge({}, state, {
      isFetching: false,
      fetched: true,
      items: action.response.data
    });
  case FETCH_FAILURE:
    return merge({}, state, {
      isFetching: false,
      fetched: false
    });
  }
  return state;
}

export function fetchBudgetDomainTransactions() {
  return {
    apiMiddleware: {
      types: [FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE],
      caller: (api, getState) => {
        const { accessToken } = getState().auth;
        const budgetDomainId = getState().budgetDomain.entity.id;
        return api.fetchBudgetTransactions(accessToken, budgetDomainId);
      }
    }
  };
}
