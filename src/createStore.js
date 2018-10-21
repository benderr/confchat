import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

export const createAppStore = (...middlwares) => createStore(
    rootReducer,
    applyMiddleware(thunk)
);