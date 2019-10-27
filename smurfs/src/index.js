import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// Redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// Reducers
import { reducer as smurfReducer } from './reducers/smurfs';

const rootReducer = combineReducers({
    smurf: smurfReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);