import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

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
  return {
    budgetDomains: state.get('budgetDomains')
  };
}

export const BudgetDomainsContainer = connect(mapStateToProps)(BudgetDomains);
