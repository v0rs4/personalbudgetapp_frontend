import React from 'react';
import classnames from 'classnames';
import paginator from 'helpers/paginator';

export default React.createClass({
  changePage: function(page) {
    return (e) => {
      e.preventDefault();
      e.target.blur();
      this.props.changePage(page);
    };
  },
  prevPage: function(e) {
    e.preventDefault();
    const { currentPage } = this.props;
    this.props.changePage(currentPage - 1);
  },
  nextPage: function(e) {
    e.preventDefault();
    const { currentPage } = this.props;
    this.props.changePage(currentPage + 1);
  },
  renderPrevListItem: function() {
    const { currentPage } = this.props;
    return (
      <li>
        { currentPage == 1 ?
          <span className="disabled">Previous</span> :
          <a href="" onClick={this.prevPage}>Previous</a> }
      </li>
    );
  },
  renderNextListItem: function() {
    const { currentPage, maxPage } = this.props;
    return (
      <li>
        { currentPage < maxPage ?
          <a href="" onClick={this.nextPage}>Next</a> :
          <span className="disabled">Next</span> }
      </li>
    );
  },
  renderPaginationListItems: function() {
    const { currentPage, maxPage } = this.props;
    const list =  paginator(currentPage, maxPage, 3).map((n,i) => {
      let classNames = classnames({active: currentPage === n});
      return (
        <li className={classNames} key={i}>
          { n === '...' ?
            <span>...</span> :
            <a href="#" onClick={this.changePage(n)}>{n}</a> }
        </li>
      );
    });
    return [
      this.renderPrevListItem(),
      ...list,
      this.renderNextListItem()
    ];
  },
  renderPaginationList: function() {
    return <ul className="pagination">{this.renderPaginationListItems()}</ul>;
  },
  renderPagination: function() {
    return <nav>{this.renderPaginationList()}</nav>;
  },
  render: function() {
    return this.renderPagination();
  }
});
