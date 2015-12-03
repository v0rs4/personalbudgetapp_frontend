import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { authenticateUser } from 'redux/bundles/auth';
import { ThreeBounceSpinner } from 'components/spinners';

export default function(Component) {
  const Guardian = React.createClass({
    displayName: 'Guardian',
    mixins: [PureRenderMixin],
    checkUserSignedIn: function(){
      const { userSignedIn, authenticateUser } = this.props;
      !userSignedIn && authenticateUser();
    },
    componentWillMount: function(){
      this.checkUserSignedIn();
    },
    componentDidUpdate: function() {
      this.checkUserSignedIn();
    },
    renderSpinner: function() {
      return <div className='screen-center'><ThreeBounceSpinner /></div>;
    },
    render: function() {
      const { props: { userSignedIn }, renderSpinner } = this;
      return userSignedIn ? <Component {...this.props} /> : renderSpinner();
    }
  });

  return connect(
    state => ({ userSignedIn: state.auth.isSignedIn }),
    { authenticateUser }
  )(Guardian);
}
