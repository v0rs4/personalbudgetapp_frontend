// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'ApplicationLayout',
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div className="top-navigation" id="wrapper">
        <div id="page-wrapper" className="gray-bg">
          <div className="row border-bottom white-bg">
            <nav className="navbar navbar-static-top" role="navigation">
              <div className="navbar-header">
                <button aria-controls="navbar" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                  <i className="fa fa-reorder"></i>
                </button>
                <a href="#" className="navbar-brand">PersonalBudget</a>
              </div>
              <div className="navbar-collapse collapse" id="navbar">
                <ul className="nav navbar-nav">
                  <li className="active">
                    <a role="button" href="layouts.html">Switch domain</a>
                  </li>
                  <li className="dropdown">
                    <a role="button" href="" className="dropdown-toggle">Dashboard <span className="caret"></span></a>
                    <ul role="menu" className="dropdown-menu">
                      <li><a href="">Categories</a></li>
                      <li><a href="">Expenses</a></li>
                      <li><a href="">Incomes</a></li>
                      <li><a href="">Debts</a></li>
                    </ul>
                  </li>
                </ul>
                <ul className="nav navbar-top-links navbar-right">
                  <li>
                    <a href="login.html">
                      <i className="fa fa-sign-out"></i> Log out
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="wrapper wrapper-content">
            <div className="container">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
});
