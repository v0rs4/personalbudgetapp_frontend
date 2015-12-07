import React from 'react';
import GreedyColumn from './GreedyColumn';

import isArray from 'lodash/lang/isArray';

export default React.createClass({
  verifycolumnMetadata: function() {
    const { columnMetadata } = this.props;
    if (!isArray(columnMetadata)) {
      throw new Error('columnMetadata is not array');
    }
    if (columnMetadata.length === 0) {
      throw new Error('columnMetadata should have at least 1 element');
    }
  },
  renderColumns: function(){
    const { columnMetadata, data } = this.props;
    return columnMetadata.map((meta, index) => {
      return <GreedyColumn key={index} metaData={meta}>{meta.value(data)}</GreedyColumn>;
    });
  },
  renderRow: function() {
    return <tr key={this.props.key}>{this.renderColumns()}</tr>;
  },
  render: function() {
    const {
      verifycolumnMetadata,
      renderRow
    } = this;
    verifycolumnMetadata();
    return renderRow();
  }
});
