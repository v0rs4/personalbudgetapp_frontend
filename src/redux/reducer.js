import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import { auth, budgetDomains, budgetCategories } from './bundles';

export default combineReducers({
  auth,
  budgetDomains,
  budgetCategories,
  router
});
