// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// Component
import Table from './BudgetCategories/Table'

export default React.createClass({
  // mixins: [PureRenderMixin],
  fetch: function() {
    const {
      fetchBudgetCategories,
      budgetDomainId
    } = this.props

    fetchBudgetCategories(budgetDomainId);
  },
  componentDidMount: function(){
    this.fetch();
  },
  render: function() {
    return <Table items={this.props.budgetCategories}/>;
  }
});
