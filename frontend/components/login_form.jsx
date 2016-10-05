// var React = require("react");
// var UserActions = require("../../actions/user_actions");
// var CurrentUserState = require("../../mixins/current_user_state");
// var Modal = require('react-modal');
// var GuestLogin2 = require ('./GuestLogin2.jsx');
// var SignUpModal2 = require('./SignUpModal2.jsx');

import React from 'react';
import { Link } from 'react-router';
import { withRouter, hashHistory} from 'react-router';
import { Nav, NavItem } from 'react-bootstrap'

class LoginForm extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate(){
    this.redirectIfLoggedOut();
  }

  redirectIfLoggedOut(){
    if (!this.props.currentUser){
      this.props.router.push("/login");
    }
  }

var LoginForm2 = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function(){
    return {form: "", password: "", username: ""};
  },

  setForm: function(e){
    this.setState({form: e.currentTarget.value});
  },

  handleSubmit: function(e){
    e.preventDefault();
    UserActions[this.state.form]({
      username: this.state.username,
      password: this.state.password
    });

    this.setState({username: "", password: ""});
  },

  logout: function(e){
    e.preventDefault();
    UserActions.logout();
  },

  greeting: function(){
    if (!this.state.currentUser) {
      return;
    }
    return (
      <div>
        <h2>Hi, {this.state.currentUser.username}!</h2>
        <button type="submit" value="logout" onClick={this.logout}>Log Out</button>
      </div>
    );
  },

  errors: function(){
    if (!this.state.userErrors){
      return;
    }
    var self = this;
    return (
      <ul>
        {
          this.state.userErrors.map(function(el){
            return (<li key={el + 1}>{el}</li>);
          })
        }
      </ul>
    );
  },

  form: function(){
    if (this.state.currentUser) {
      return;
    }

    return(
      <div className="login-text">
        <h2>Welcome!</h2>

        <hr className="smaller-hr"></hr>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" id="Username"
               placeholder="Username" onChange={this.handleUsername}>
            </input>
          </div>


          <div class="form-group">
            <input type="password" className="form-control" id="Password"
              placeholder="Password" onChange={this.handlePassword}>
            </input>
          </div>

          <hr className="smaller-hr"></hr>

          <button type="submit" className="btn btn-success btn-block btn-login-form-login"
            value="login" onClick={this.setForm}>
            Log In
          </button>
          <hr className="smaller-hr"></hr>
          <label>Don't have an account?</label>
          <SignUpModal2 loginform="true"/>
          <GuestLogin2 loginform="true"/>
        </form>
        {this.errors()}

      </div>
    );
  },

  guestLogin: function(e){
    e.preventDefault();
    UserActions.guestLogin();
    this.setState({username: "", password: ""});
  },

  handleUsername: function(e){
    e.preventDefault();
    this.setState({username: e.currentTarget.value});
  },

  handlePassword: function(e){
    e.preventDefault();
    this.setState({password: e.currentTarget.value});
  },

  render: function(){
    return (
      <div id="login-form">
        {this.greeting()}
        {this.form()}
      </div>
    );
  }
});

module.exports = LoginForm2;
