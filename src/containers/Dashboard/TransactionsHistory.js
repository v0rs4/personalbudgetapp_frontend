import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { fetchBudgetDomains } from 'redux/bundles/budgetDomains';
import { IBox } from 'components';
import { DoubleBounceSpinner } from 'components/spinners';

const TransactionsHistory =  React.createClass({
  mixins: [PureRenderMixin],
  componentDidMount: function() {
    this.props.fetchBudgetDomains();
  },
  renderTable: function() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {this.props.budgetDomains.map(entry =>
            <tr key={entry.id}>
              <td>{entry.attributes.name}</td>
              <td>{entry.attributes.description}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  },
  renderSpinner: function() {
    return <DoubleBounceSpinner />;
  },
  render: function() {
    const { props: { isFetching }, renderSpinner, renderTable } = this;
    return (
      <IBox>
        <IBox.Title title="History" label="This month"/>
        <IBox.Content>
          {isFetching ? renderSpinner() : renderTable()}
        </IBox.Content>
      </IBox>
    );
  }
});


export default connect(
  state => ({
    budgetDomains: state.budgetDomains.items,
    fetched: state.budgetDomains.fetched,
    isFetching: state.budgetDomains.isFetching
  }),
  { fetchBudgetDomains }
)(TransactionsHistory);
