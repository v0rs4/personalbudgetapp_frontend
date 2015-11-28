// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// Redux
import {connect} from 'react-redux';
import {fetchBudgetCategories} from '../../action_creators';
// Component
import Table from './Table';

const BudgetCategories = React.createClass({
  mixins: [PureRenderMixin],
  fetch: function() {
    const {
      fetchBudgetCategories,
      budgetDomainId
    } = this.props;

    fetchBudgetCategories(budgetDomainId);
  },
  componentDidMount: function(){
    this.fetch();
  },
  render: function() {
    return <Table items={this.props.budgetCategories}/>;
  }
});

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
