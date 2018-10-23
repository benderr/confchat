import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/index';

export const createAppStore = ({middlewares}) => {

    const _middlewares = applyMiddleware(...middlewares);

    let enhancer;
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(_middlewares);
    } else {
        enhancer = compose(_middlewares);
    }

    return createStore(
        rootReducer,
        {},
        enhancer
    );
};