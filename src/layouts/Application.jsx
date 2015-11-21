// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// Redux
import {connect} from 'react-redux';
// Action creators
import * as actionCreators from '../action_creators';
// Containers
import Navbar from '../containers/Navbar';

const ApplicationLayout = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      <Navbar />
      {this.props.children}
    </div>
  }
});

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  actionCreators
)(ApplicationLayout);
