import React from 'react';
import BudgetDomains from '../components/BudgetDomains';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

function mapStateToProps(state) {
  return {
    userSignedIn: state.user.get('signedIn'),
    budgetDomains: state.budgetDomains.get('budgetDomains')
  };
}

export default connect(
  mapStateToProps,
  actionCreators
)(BudgetDomains);

