import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import './index.css';

import * as actions from './actions/actionCreators';

const store = createStore(rootReducer);

window.actions = actions;
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
