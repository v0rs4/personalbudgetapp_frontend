import React from 'react';
import GreedyRow from './GreedyRow';

export default React.createClass({
  renderHeader: function() {
    return (
      <thead>
        {this.renderHeaderRow()}
      </thead>
    );
  },
  renderHeaderRow: function(){
    return (
      <tr>
        {this.renderHeaderColumns()}
      </tr>
    );
  },
  renderHeaderColumns: function(){
    return this.props.headerMetadata.map((metaData, index) => {
      return <th key={index}>{metaData.displayTitle}</th>;
    });
  },
  renderBody: function() {
    return (
      <tbody>
        {this.renderBodyRows()}
      </tbody>
    );
  },
  renderBodyRows: function(){
    return this.props.data.map((row, index) => {
      return this.renderRow(row, index);
    });
  },
  renderRow: function(data, key) {
    const { columnMetadata } = this.props;
    return <GreedyRow
      key={key}
      data={data}
      columnMetadata={columnMetadata} />;
  },
  renderTable: function() {
    return (
      <table className="table table-striped">
        {this.renderHeader()}
        {this.renderBody()}
      </table>
    );
  },
  render: function(){
    return this.renderTable();
  }
});
