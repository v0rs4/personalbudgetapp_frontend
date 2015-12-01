import merge from 'lodash.merge';

const FETCH_REQUEST = 'budgetDomains/fetchRequest';
const FETCH_SUCCESS = 'budgetDomains/fetchSuccess';
const FETCH_FAILURE = 'budgetDomains/fetchFailure';

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

export function fetchBudgetDomains() {
  return {
    apiMiddleware: {
      types: [FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE],
      caller: (api, getState) => {
        const { accessToken } = getState().auth;
        return api.fetchBudgetDomains(accessToken);
      }
    }
  };
}
