import './styles/stylesheet.scss';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import App from './containers/Main';
import rootRedux from './reducers';

const store = createStore(
  rootRedux,
  composeWithDevTools(applyMiddleware(ReduxThunk))
)

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)