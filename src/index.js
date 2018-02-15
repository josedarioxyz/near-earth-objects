import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import registerServiceWorker from './utils/registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import rootReducer from './reducers/rootReducer';
import App from './App';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') { middleware.push(createLogger()); };

const store = createStore(rootReducer, applyMiddleware(...middleware));
const rootDOMNode = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootDOMNode
);

registerServiceWorker();
