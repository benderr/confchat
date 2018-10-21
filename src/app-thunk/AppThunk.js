import React, {Component} from 'react';
import {UserList} from "../components/UserList";
import {ChatHistory} from "../components/ChatHistory";
import {WriteBox} from "../components/WriteBox";
import {Provider, connect} from 'react-redux'
import {createAppStore} from "./createStore";
import thunk from 'redux-thunk';
import {bindActionCreators} from 'redux';

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({
            test: () => ({
                type: 'ADD_TODO',
                text: 'test'
            })
        }, dispatch)
    };
}

@connect(null, mapDispatchToProps)
class AppThunk extends Component {
    render() {
        const store = createAppStore({middlewares: [thunk]});
        return (
            <Provider store={store}>
                <div className="container clearfix">
                    <UserList/>
                    <div className="chat">
                        <ChatHistory/>
                        <WriteBox/>
                    </div>
                </div>
            </Provider>
        );
    }
}

export {AppThunk};
