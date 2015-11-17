// React
import React from 'react';

export default React.createClass({
  componentDidMount: function(){
    // this.props.authorizeAccessToken(this.props.accessToken)
  },
  render: function() {
    return this.props.children;
  }
});


