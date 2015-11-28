
// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// Redux
import {connect} from 'react-redux';
import {
  authenticateUser,
  fetchBudgetDomains
} from '../../action_creators';
// Component
import Table from './Table';

const BudgetDomains =  React.createClass({
  mixins: [PureRenderMixin],
  componentDidMount: function(){
    this.props.fetchBudgetDomains();
  },
  render: function() {
    return <Table items={this.props.budgetDomains}/>;
  }
});

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
