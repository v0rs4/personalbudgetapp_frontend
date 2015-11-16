import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const BudgetDomains = React.createClass({
  mixins: [PureRenderMixin],
  getBudgetDomains: function() {
    return this.props.budgetDomains || [];
  },
  canUpdate: function(entry) {
    return entry.getIn(['attributes', 'permissions', 'can_update']);
  },
  canCreate: function(entry) {
    return entry.getIn(['attributes', 'permissions', 'can_create']);
  },
  canDestroy: function(entry) {
    return entry.getIn(['attributes', 'permissions', 'can_destroy']);
  },
  componentDidMount: function() {
    this.interval = setInterval(() => {
      this.props.fetchBudgetDomains('95fbb25c91c52ce7ed5cc5772f06420a281bd99b143e74fc3d1c711808083c63')
    }, 1500);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return <table>
      <thead>
        <tr>
          <th>name</th>
          <th>description</th>
          <th colSpan="3"></th>
        </tr>
      </thead>
      <tbody>
        {this.getBudgetDomains().map(entry =>
          <tr key={entry.get('id')}>
            <td>{entry.getIn(['attributes', 'name'])}</td>
            <td>{entry.getIn(['attributes', 'description'])}</td>
            <td>Show</td>
            <td>{this.canUpdate(entry) ? 'Edit' : null}</td>
            <td>{this.canDestroy(entry) ? 'Destroy' : null}</td>
          </tr>
        )}
      </tbody>
    </table>
  }
});

function mapStateToProps(state) {
  window.state = state;
  return {
    budgetDomains: state.get('budgetDomains')
  };
}

export const BudgetDomainsContainer = connect(
  mapStateToProps,
  actionCreators
)(BudgetDomains);
