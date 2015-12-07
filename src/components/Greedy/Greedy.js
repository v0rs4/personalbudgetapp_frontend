import React from 'react';
import GreedyTable from './GreedyTable';
import GreedyPagination from './GreedyPagination';

// import drop from 'lodash/array/drop';

export default React.createClass({
  getDefaultProps: function() {
    return {
      GreedyClassName: '',
      tableClassName: '',
      data: [],
      columnMetadata: [],
      perPage: 10
    };
  },
  getInitialState: function() {
    return {
      perPage: this.props.perPage,
      currentPage: 9,
      maxPage: 20
    };
  },
  getDataForRender: function() {

  },
  renderGreedyTable: function() {
    const { data, columnMetadata, headerMetadata } = this.props;
    return <GreedyTable data={data} columnMetadata={columnMetadata} headerMetadata={headerMetadata} />;
  },
  changePage: function(currentPage) {
    this.setState({ currentPage });
  },
  renderPagination: function(){
    const { currentPage, maxPage } = this.state;
    return <GreedyPagination currentPage={currentPage} maxPage={maxPage} changePage={this.changePage} />;
  },
  render: function() {
    const {
      GreedyClassName
    } = this.props;

    return (
      <div className={GreedyClassName}>
        {this.renderPagination()}
        {this.renderGreedyTable()}
      </div>
    );
  }
});
