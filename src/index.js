import React from 'react';
import promiseMiddleware from 'redux-promise-middleware'
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import initialState from './logic/defaultState';
import reducer from './logic/reducer'
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer,initialState);

    ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
