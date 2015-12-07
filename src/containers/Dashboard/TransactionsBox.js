import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { fetchBudgetDomainTransactions } from 'redux/bundles/budgetDomain/transactions';
import { IBox } from 'components';
import { FadingCircleSpinner } from 'components/spinners';
import Greedy from 'components/Greedy/Greedy';

const TransactionsBox =  React.createClass({
  mixins: [PureRenderMixin],
  componentDidMount: function() {
    this.props.fetchBudgetDomainTransactions();
  },
  renderTable: function() {
    const { budgetDomainTransactions } = this.props;
    const headerMetadata = [
      { displayTitle: 'User' },
      { displayTitle: 'Account' },
      { displayTitle: 'Category' },
      { displayTitle: 'Amount' },
      { displayTitle: 'Comment' },
      { displayTitle: 'Kind' }
    ];
    const columnMetadata = [
      { value: data => data.attributes.user_email },
      { value: data => data.attributes.account_name },
      { value: data => data.attributes.category_name },
      { value: data => data.attributes.amount },
      { value: data => data.attributes.comment },
      { value: data => data.attributes.kind }
    ];
    return <Greedy data={budgetDomainTransactions} columnMetadata={columnMetadata} headerMetadata={headerMetadata} />;
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
