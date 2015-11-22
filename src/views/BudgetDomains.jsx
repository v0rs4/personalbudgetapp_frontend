// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// Component
import BudgetDomainsTable from '../components/BudgetDomainsTable'

export default React.createClass({
  mixins: [PureRenderMixin],
  componentDidMount: function(){
    this.props.fetchBudgetDomains();
  },
  componentDidUpdate: function(){
    const {
      fetched,
      isFetching,
      fetchBudgetDomains
    } = this.props

    if (!(fetched || isFetching)) fetchBudgetDomains();
  },
  can: function(entry, action) {
    return entry.getIn(['attributes', 'permissions', `can_${action}`]);
  },
  render: function() {
    return <BudgetDomainsTable items={this.props.budgetDomains}/>;
  }
});
