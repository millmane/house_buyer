import React from 'react';
import { Link } from 'react-router';
import { withRouter, hashHistory} from 'react-router';
import { Nav, NavItem } from 'react-bootstrap';
import SessionFormContainer from './session_form_container';
import Modal from 'react-modal';

class Greeting2 extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    modalIsOpen: false
  }

  this.customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        backgroundColor      : '#222a3f',
        color                 : '#d5e1ef'
    }
  }
  this.openModal = this.openModal.bind(this)
  this.closeModal = this.closeModal.bind(this)
  this.handleLogout = this.handleLogout.bind(this)
}

  handleLogout(){
    this.closeModal();
    this.props.logout();
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  componentDidUpdate(){
    // if (currentUser)

    // this.redirectIfLoggedOut();
  }

  redirectIfLoggedOut(){
    if (!this.props.currentUser){
      // this.props.router.push("/login");
    }
  }

  sessionLinks(){
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><a onClick={this.openModal}>Log In</a></li>
        <li><a onClick={this.openModal}>Signup</a></li>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={this.customStyles} >
          <SessionFormContainer closeModal={this.closeModal}/>
        </Modal>
      </ul>
    )
  };

  personalGreeting(currentUser){
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/" onClick={this.handleLogout}>Log Out</Link></li>
        <li className="nav-text">Welcome, {currentUser.username}</li>
      </ul>
    )
  };

  render(){
    if (this.props.currentUser){
      // this.closeModal()
      return this.personalGreeting(this.props.currentUser);
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
