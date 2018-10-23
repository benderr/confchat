import React, {Component, Fragment} from 'react';
import {UserListContainer} from "./UserListContainer";
import {ChatHistory} from "../../components/ChatHistory";
import {WriteBox} from "../../components/WriteBox";
import {withProfile} from "./withProfile";
import {Loader} from "../../components/Loader";
import {LoginForm} from "../../components/LoginForm";

@withProfile
class App extends Component {
    componentDidMount() {
        if (!this.props.user)
            this.props.initProfile();
    }

    render() {
        if (this.props.fetchingProfile)
            return (<Loader/>);

        if (!this.props.user)
            return <LoginForm sendLogin={this.props.sendLogin}
                              error={this.props.error}
                              loading={this.props.loading}/>;

        return (
            <div className="container clearfix">
                <UserListContainer/>
                <div className="chat">
                    <ChatHistory/>
                    <WriteBox/>
                </div>
            </div>
        );
    }
}

export {App};
