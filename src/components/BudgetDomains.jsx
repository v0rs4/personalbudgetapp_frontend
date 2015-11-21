import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

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
    return <table>
      <thead>
        <tr>
          <th>name</th>
          <th>description</th>
          <th colSpan="3"></th>
        </tr>
      </thead>
      <tbody>
        {this.props.budgetDomains.map(entry =>
          <tr key={entry.get('id')}>
            <td>{entry.getIn(['attributes', 'name'])}</td>
            <td>{entry.getIn(['attributes', 'description'])}</td>
            <td>Show</td>
            <td>{this.can(entry, 'update') ? 'Edit' : null}</td>
            <td>{this.can(entry, 'destroy') ? 'Destroy' : null}</td>
          </tr>
        )}
      </tbody>
    </table>;
  }
});
