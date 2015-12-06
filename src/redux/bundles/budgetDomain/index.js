import { combineReducers } from 'redux';
import entity from './entity';
import transactions from './transactions';

export default combineReducers({
  entity,
  transactions
});
