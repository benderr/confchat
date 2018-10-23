import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {UserList} from "../../components/UserList";
import React from 'react';

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({
            test: () => ({
                type: 'ADD_TODO',
                payload: {text: 'test'}
            }),
            increment: () => ({
                type: 'INCREMENT',
            })
        }, dispatch)
    };
}

@connect(null, mapDispatchToProps)
class UserListContainer extends React.Component {
    render() {
        this.props.test();
        this.props.increment();
        return <UserList/>;
    }
}

export {UserListContainer}