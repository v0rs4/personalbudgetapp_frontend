import React from 'react';
import {fromJS} from 'immutable';

const budgetDomains = fromJS([
  {"id":"1","type":"budget_domains","attributes":{"name":"Home","description":"Pauk's family budget","permissions":{"can_create":true,"can_read":true,"can_update":false,"can_destroy":false}}},
  {"id":"6","type":"budget_domains","attributes":{"name":"Pauk Fam","description":"","permissions":{"can_create":true,"can_read":true,"can_update":true,"can_destroy":true}}}
]);

window.budgetDomains = budgetDomains

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {budgetDomains: budgetDomains.toJS()});
  }
});
