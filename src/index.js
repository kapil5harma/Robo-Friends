import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { robots } from './robots';
import CardList from './CardList';

const app = <CardList robots={robots} />;

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
