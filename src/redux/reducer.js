import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import {
  auth,
  budgetDomains,
  budgetDomain,
  budgetCategories
} from './bundles';

export default combineReducers({
  auth,
  budgetDomains,
  budgetDomain,
  budgetCategories,
  router
});
