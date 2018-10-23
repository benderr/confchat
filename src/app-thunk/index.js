import React, {Component} from 'react';
import {App} from "./components/App";
import {Provider} from 'react-redux'
import {createAppStore} from "./createStore";
import thunk from 'redux-thunk';

const store = createAppStore({middlewares: [thunk]});

class AppRoot extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

export {AppRoot};
