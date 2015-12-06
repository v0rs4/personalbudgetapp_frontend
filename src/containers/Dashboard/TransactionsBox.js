import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { fetchBudgetDomainTransactions } from 'redux/bundles/budgetDomain/transactions';
import { IBox } from 'components';
import { FadingCircleSpinner } from 'components/spinners';

const TransactionsBox =  React.createClass({
  mixins: [PureRenderMixin],
  componentDidMount: function() {
    this.props.fetchBudgetDomainTransactions();
  },
  renderTable: function() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User</th>
            <th>Account</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Comment</th>
            <th>Kind</th>
          </tr>
        </thead>
        <tbody>
          {this.props.budgetDomainTransactions.map(entry =>
            <tr key={entry.id}>
              <td>{entry.attributes.user_email}</td>
              <td>{entry.attributes.account_name}</td>
              <td>{entry.attributes.category_name}</td>
              <td>{entry.attributes.amount}</td>
              <td>{entry.attributes.comment}</td>
              <td>{entry.attributes.kind}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  },
  renderSpinner: function() {
    return <FadingCircleSpinner />;
  },
  render: function() {
    const { props: { isFetching }, renderSpinner, renderTable } = this;
    return (
      <IBox>
        <IBox.Title title="Transactions" label="This month"/>
        <IBox.Content>
          {isFetching ? renderSpinner() : renderTable()}
        </IBox.Content>
      </IBox>
    );
  }
});


export default connect(
  state => ({
    budgetDomainTransactions: state.budgetDomain.transactions.items,
    fetched: state.budgetDomain.transactions.isFetched,
    isFetching: state.budgetDomain.transactions.isFetching
  }),
  { fetchBudgetDomainTransactions }
)(TransactionsBox);
