// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// Component
import Form from './SignIn/Form';

export default React.createClass({
  mixins: [PureRenderMixin],
  componentWillMount: function() {
    this.props.checkUserSignedIn({redirectUrl: '/'});
    document.body.classList.add('gray-bg');
  },
  componentWillUnmount: function(){
    document.body.classList.remove('gray-bg');
  },
  render: function() {
    return <div className="middle-box text-center loginscreen animated fadeInDown">
        <div>
          <h3>Welcome to PersonalBudget</h3>
          <p>Login in. To see it in action.</p>
          <Form signIn={this.props.signIn} />
          <p className="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
        </div>
    </div>;
  }
});
