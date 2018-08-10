import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './containers/App';
import { searchRobots } from './reducers';

const store = createStore(searchRobots);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
