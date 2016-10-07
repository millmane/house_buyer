import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestSubmit = this.guestSubmit.bind(this);
    this.guestButton = this.guestButton.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);

  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn){
      hashHistory.push("/");
    }
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  handleLogin(e){
    e.preventDefault();
    const user = this.state;
    this.props.processLogin({user})
  }

  handleSignup(e){
    e.preventDefault();
    const user = this.state;
    this.props.processSignup({user})
  }

  guestSubmit(e){
    e.preventDefault();

    const user = {
      username: "guest",
      password: "password"
    }

    this.props.processLogin({user})


    // this.props.processForm({user});


  }

  guestButton(){
    // if (!this.props.loggedIn) {
    // }
  }

  navLink(){
  //   if (!this.props.loggedIn) {
  //     return <Link to="/signup">sign up instead</Link>;
  //   } else {
  //     return <Link to="/login">log in instead</Link>;
  //   }
  //   // if (this.props.formType === "login") {
  //   //   return <Link to="/signup">sign up instead</Link>;
  //   // } else {
  //   //   return <Link to="/login">log in instead</Link>;
  //   // }
  }

  renderErrors(){
    if (this.props.errors.length !== 0) {
      return(
        <div className="alert alert-danger" role="alert">
          {this.props.errors.map( (error, i) => (
            <span key={'error-${i}'}>
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              {error}
            </span>
          ))}
      </div>
      );
    }

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="page-header">
          <h1>Welcome to HouseBuyer!</h1>
        </div>
        <form className="login-form-box">
          <div className="form-group">
            <label htmlFor="inputUsername">Username</label>
            <input type="text"
                   id="inputUsername"
                   value={this.state.username}
                   onChange={this.update("username")}
                   className="form-control"
                   placeholder="Username"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
              <input type="password"
                     id="inputPassword"
                     value={this.state.password}
                     onChange={this.update("password")}
                     className="form-control"
                     placeholder="Password"/>
          </div>
          { this.renderErrors() }

          <hr></hr>
            <button type="submit" className="btn btn-default session-form-button" onClick={this.handleLogin}>Login</button>
            <button type="submit" className="btn btn-default session-form-button" onClick={this.handleSignup}>Signup</button>
            <button type="submit" className="btn btn-default session-form-button" onClick={this.guestSubmit}>Guest User</button>

        </form>
      </div>
    );
  }
}

export default SessionForm;
