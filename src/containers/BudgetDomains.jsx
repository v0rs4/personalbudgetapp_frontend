import React from 'react';
import BudgetDomains from '../components/BudgetDomains';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

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
  actionCreators
)(BudgetDomains);

