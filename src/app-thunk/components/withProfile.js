import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {initProfile, loginUser} from "../actions/actions";

export function withProfile(Component) {
    class WithLoginComponent extends React.PureComponent {
        render() {
            return  <Component  {...this.props} />
        }
    }

    const mapStateToProps = (state) => {
        return {
            user: state.login.user,
            loading: state.login.loading,
            error: state.login.error,
            fetchingProfile: state.login.fetchingProfile
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            ...bindActionCreators({
                sendLogin: loginUser,
                initProfile: initProfile,
            }, dispatch)
        };
    };

    return connect(mapStateToProps, mapDispatchToProps)(WithLoginComponent);
}