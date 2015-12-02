import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { IBox } from 'components';

export default React.createClass({
  mixins: [PureRenderMixin],
  percentStat: function() {
    const { percentStat } = this.props;
    if (typeof percentStat !== 'number') {
      return null;
    }
    if (percentStat >= 0) {
      return <div className="stat-percent font-bold text-navy">{percentStat}% <i className="fa fa-level-up"></i></div>;
    }
    return <div className="stat-percent font-bold text-danger">{percentStat}% <i className="fa fa-level-down"></i></div>;
  },
  render: function() {
    const { label, amount, currency, title, subtitle } = this.props;
    return (
      <IBox>
        <IBox.Title title={title} label={label}/>
        <IBox.Content>
          <h1 className="no-margins">{amount} <span style={{fontSize: '0.4em'}}>{currency}</span></h1>
          {this.percentStat()}
          <small>{subtitle}</small>
        </IBox.Content>
      </IBox>
    );
  }
});
