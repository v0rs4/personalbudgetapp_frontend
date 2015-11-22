// Redux
import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
// Redux Reducers
import user from './user';
import budgetDomains from './budgetDomains';
import budgetCategories from './budgetCategories';

export default combineReducers({
  user,
  budgetDomains,
  budgetCategories,
  router
});
