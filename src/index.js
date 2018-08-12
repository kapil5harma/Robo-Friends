import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from '../node_modules/redux-thunk';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';

const logger = createLogger();

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
