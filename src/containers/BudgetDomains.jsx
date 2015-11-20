import React from 'react';
import BudgetDomains from '../components/BudgetDomains';
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
