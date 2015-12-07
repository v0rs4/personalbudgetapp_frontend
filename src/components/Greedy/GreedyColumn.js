import React from 'react';

export default React.createClass({
  render: function() {
    const { className } = this.props.metaData;
    return (
      <td className={className}>
        {this.props.children}
      </td>
    );
  }
});
