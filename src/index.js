import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles/index.css';
import App from './components/App';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import './components/styles/iconos.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers/index';

const composeEnhancers = composeWithDevTools({})

const store = createStore(
    reducers, //Todos los reducers
    {}, //El estado inicial
    composeEnhancers(
        applyMiddleware(reduxThunk)
    )
);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
