// Redux
import { combineReducers } from 'redux'
// Reducers
import signIn from './signIn'
import user from './user'
import budgetDomains from './budgetDomains'

export default combineReducers({
  user,
  signIn,
  budgetDomains
})
