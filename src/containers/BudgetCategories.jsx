// View
import BudgetCategories from '../components/BudgetCategories';
// Redux
import {connect} from 'react-redux';
import {fetchBudgetCategories} from '../action_creators';

function mapStateToProps(state) {
  return {
    userSignedIn: state.user.get('signedIn'),
    budgetCategories: state.budgetCategories.get('items'),
    fetched: state.budgetCategories.get('fetched'),
    isFetching: state.budgetCategories.get('isFetching'),
    budgetDomainId: state.router.params.budgetDomainId
  };
}

export default connect(
  mapStateToProps,
  {fetchBudgetCategories}
)(BudgetCategories);
