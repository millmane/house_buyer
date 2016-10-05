import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import GreetingContainer2 from './greeting2_container';
import LoginModal from './login_modal';

const handleSelect = (eventKey) => {
    event.preventDefault();
    alert(`selected ${eventKey}`);
};

const NavBar = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

        <Link className="navbar-brand" to="/">
          <img alt="Brand" className="brand-image" src="assets/50x50.png"/>
        </Link>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/houses/search">Search Houses</Link></li>
        </ul>
        <GreetingContainer2/>
      </div>
    </div>
  </nav>

);

export default NavBar;
