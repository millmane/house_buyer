//React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Modal from 'react-modal'
import { requestHouses,
         receiveHouses
       } from './actions/house_actions';
//Components
import Root from './components/root';
//Actions

import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', function() {
  // let store;
  // if (window.currentUser) {
  //   const initialState = {session: {currentUser: window.currentUser}};
    // store = configureStore(initialState);
  // } else {
  //   store = configureStore();
  // }
  // window.myLib = {}
  // myLib.requestHouses = requestHouses;
  // console.log(requestHouses);
  window.Store = configureStore();
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }


  // console.log(window.Store.getState());
  // console.log(window.Store.dispatch(requestHouses()));
  // console.log(window.Store.getState());
  const root = document.getElementById('root');
  Modal.setAppElement(root);
  ReactDOM.render(<Root store={store}/>, root);
});
