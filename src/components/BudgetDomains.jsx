import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  componentWillMount: function(){
    this.props.authenticateUser();
  },
  componentDidUpdate: function(){
    const {
      userSignedIn,
      fetched,
      isFetching,
      fetchBudgetDomains
    } = this.props

    if (userSignedIn && !(fetched || isFetching)) fetchBudgetDomains();
  },
  getBudgetDomains: function() {
    return this.props.budgetDomains || [];
  },
  can: function(entry, action) {
    return entry.getIn(['attributes', 'permissions', `can_${action}`]);
  },
  renderTable: function(){
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
  },
  render: function() {
    return this.props.userSignedIn ? this.renderTable() : <p>spinner</p>;
  }
});
