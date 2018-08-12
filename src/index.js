import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from '../node_modules/redux-thunk';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
