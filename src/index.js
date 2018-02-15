import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import App from './App';

const rootDOMNode = document.getElementById('root');

ReactDOM.render(<App />, rootDOMNode);

registerServiceWorker();
