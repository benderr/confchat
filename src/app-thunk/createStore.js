import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';

export const createAppStore = ({middlewares}) => createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);