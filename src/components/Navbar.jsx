import React from 'react';
import { Link } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <ul>
      <li><a href="" onClick={this.props.signOut}>Sign Out</a></li>
    </ul>
  }
});
