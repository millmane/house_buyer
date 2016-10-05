import React from 'react';
import { Link } from 'react-router';
import { withRouter, hashHistory} from 'react-router';
import { Nav, NavItem } from 'react-bootstrap'
class Greeting2 extends React.Component {
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

  sessionLinks(){
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    )
  };

  personalGreeting(currentUser, logout){
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/" onClick={logout}>Log Out</Link></li>
        <li className="nav-text">Welcome, {currentUser.username}</li>
      </ul>
    )
  };

  render(){
    if (this.props.currentUser){
      return this.personalGreeting(this.props.currentUser, this.props.logout);
    } else {
      return this.sessionLinks();
    }
  }
}
export default withRouter(Greeting2);
// return (
//
// <hgroup className="header-group">
//   <Nav pullRight>
//     <NavItem eventKey={1} href="#">Link Right</NavItem>
//     <NavItem eventKey={2} href="#">Link Right</NavItem>
//   </Nav>
//   <h2 className="header-name">Hiii, {currentUser.username}!</h2>
//   <button className="header-button" onClick={logout}>Log Out</button>
// </hgroup>
// )
//
// return (
//   <Nav pullRight>
//     <NavItem eventKey={1} href="/login">Log In</NavItem>
//     <NavItem eventKey={2} href="signup">Sign Up</NavItem>
//   </Nav>
// <nav className="login-signup">
//   <Link to="/login" activeClassName="current">Login</Link>
//   &nbsp;or&nbsp;
//   <Link to="/signup" activeClassName="current">Sign up!</Link>
// </nav>
