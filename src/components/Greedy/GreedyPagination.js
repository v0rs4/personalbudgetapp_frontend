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
  renderPaginationList: function() {
    const { currentPage, maxPage } = this.props;

    const list = paginator(currentPage, maxPage).map((n,i) => {
      let classNames = classnames({active: currentPage === n});
      return <li className={classNames} key={i}>
        { n === '...' ?
          <span>...</span> :
          <a href="#" onClick={this.changePage(n)}>{n}</a> }
      </li>;
    });

    return <ul className="pagination">{list}</ul>;
  },
  renderPagination: function() {
    return (
      <nav>
        {this.renderPaginationList()}
      </nav>
    );
  },
  render: function() {
    return this.renderPagination();
  }
});
