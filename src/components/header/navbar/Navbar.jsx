// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// React Router
import { Link } from 'react-router';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <ul>
      <li><a href="" onClick={this.props.signOut}>Sign Out</a></li>
    </ul>
  }
});
