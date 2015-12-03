import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Navbar from './Navbar';

export default React.createClass({
  displayName: 'ApplicationLayout',
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div className="top-navigation" id="wrapper">
        <div id="page-wrapper" className="gray-bg">
          <Navbar />
          <div className="wrapper wrapper-content">
            <div className="container">
              {this.props.hello}
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
});
