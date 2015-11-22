// View
import BudgetDomains from '../components/BudgetDomains';
// Redux
import {connect} from 'react-redux';
import {
  authenticateUser,
  fetchBudgetDomains
} from '../action_creators';

function mapStateToProps(state) {
  return {
    userSignedIn: state.user.get('signedIn'),
    budgetDomains: state.budgetDomains.get('items'),
    fetched: state.budgetDomains.get('fetched'),
    isFetching: state.budgetDomains.get('isFetching')
  };
}

export default connect(
  mapStateToProps,
  {
    authenticateUser,
    fetchBudgetDomains
  }
)(BudgetDomains);
