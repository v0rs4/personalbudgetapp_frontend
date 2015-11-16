import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const BudgetDomains = React.createClass({
  mixins: [PureRenderMixin],
  getBudgetDomains: function() {
    return this.props.budgetDomains || [];
  },
  can: function(entry, action) {
    return entry.getIn(['attributes', 'permissions', `can_${action}`]);
  },
  componentDidMount: function() {
    this.props.fetchBudgetDomains(this.props.accessToken);
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
            <td>{this.can(entry, 'update') ? 'Edit' : null}</td>
            <td>{this.can(entry, 'destroy') ? 'Destroy' : null}</td>
          </tr>
        )}
      </tbody>
    </table>
  }
});

function mapStateToProps(state) {
  return {
    accessToken: state.get('accessToken'),
    budgetDomains: state.get('budgetDomains')
  };
}

export const BudgetDomainsContainer = connect(
  mapStateToProps,
  actionCreators
)(BudgetDomains);
