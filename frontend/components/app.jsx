import React from 'react';
import { Link } from 'react-router';
import GreetingContainer2 from './greeting2_container';
import NavBar from './navbar';
import Footer from './footer'

const App = ({children}) => (
  <div id="app-div">
    <NavBar/>
    {children}
  </div>
);

export default App;
// <Footer/>
// componentWillReceiveProps(nextProps) {
//   // if we changed routes...
//   if ((
//     nextProps.location.key !== this.props.location.key &&
//     nextProps.location.state &&
//     nextProps.location.state.modal
//   )) {
//     // save the old children (just like animation)
//     this.previousChildren = this.props.children
//   }
// },
