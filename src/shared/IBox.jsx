// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export const IBox = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="ibox float-e-margins">
      {this.props.children}
    </div>;
  }
});

export const IBoxTitle = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="ibox-title">
    <span className="label label-success pull-right">{this.props.label}</span>
      <h5>{this.props.title}</h5>
    </div>;
  }
});

export const IBoxContent = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="ibox-content">
      {this.props.children}
    </div>;
  }
});
