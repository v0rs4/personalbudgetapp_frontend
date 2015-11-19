// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// Redux
import {connect} from 'react-redux';
// Action creators
import * as actionCreators from '../action_creators';

const ApplicationLayout = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return this.props.children
  }
});

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  actionCreators
)(ApplicationLayout);
