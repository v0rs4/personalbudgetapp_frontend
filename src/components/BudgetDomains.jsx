// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// Component
import Table from './BudgetDomains/Table';

export default React.createClass({
  mixins: [PureRenderMixin],
  componentDidMount: function(){
    this.props.fetchBudgetDomains();
  },
  render: function() {
    return <Table items={this.props.budgetDomains}/>;
  }
});
