import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import SearchContainer from './search_container';
import AppRouterContainer from './router_container';

const Root = ({store}) => (
  <Provider store={store}>
    <AppRouterContainer/>
  </Provider>
);

export default Root;
