import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const IBox = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="ibox float-e-margins">
      {this.props.children}
    </div>;
  }
});

IBox.Title = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="ibox-title">
    <span className="label label-success pull-right">{this.props.label}</span>
      <h5>{this.props.title}</h5>
    </div>;
  }
});

IBox.Content = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="ibox-content">
      {this.props.children}
    </div>;
  }
});

export default IBox;
