//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
// import Root from './components/root';
//Actions
// import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', function() {
  // let store;
  // if (window.currentUser) {
  //   const initialState = {session: {currentUser: window.currentUser}};
  //   store = configureStore(initialState);
  // } else {
  //   store = configureStore();
  // }

  const root = document.getElementById('root');
  ReactDOM.render(<div>hi</div>, root);
});
