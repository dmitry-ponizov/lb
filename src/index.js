import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux' 
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from  'redux-thunk'
import authReducer from './store/reducers/auth';
import dashboardReducer from './store/reducers/dashboard'
import createSagaMiddleware from "redux-saga";
import { watchAuth, watchDashboard } from "./store/sagas";

console.log(window.location.host)

const composeEnhancers = process.env.NODE_ENV === 'development' && window.location.host === 'localhost:3300' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    dashboard: dashboardReducer
})


const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk, sagaMiddleware)
    
));

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchDashboard);

const app = ( 
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
) 

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
