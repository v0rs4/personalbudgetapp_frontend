// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Stat from './Stat';

const Dashboard =  React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="row">
      <div className="col-lg-3 col-md-3">
        <Stat label='Today' subtitle="Total expenses" title="Expenses" percentStat={-15} amount="1,232" icon="level-down" currency='uah'/>
      </div>
      <div className="col-lg-3 col-md-3">
        <Stat label='This month' subtitle="Total income" title="Income" percentStat={20} amount="42,232" icon="level-down" currency='uah'/>
      </div>
    </div>;
  }
});

export default connect(
  () => ({}),
  {}
)(Dashboard);
