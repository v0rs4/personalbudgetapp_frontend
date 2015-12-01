// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

const BareLayout = React.createClass({
  displayName: 'BareLayout',
  mixins: [PureRenderMixin],
  render: function() {
    return this.props.children;
  }
});

export default connect(
  () => ({})
)(BareLayout);
