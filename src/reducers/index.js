// Redux
import { combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'
// Reducers
import signIn from './signIn'
import user from './user'
import budgetDomains from './budgetDomains'

export default combineReducers({
  user,
  signIn,
  budgetDomains,
  router
})
