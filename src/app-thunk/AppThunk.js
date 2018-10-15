import React, {Component} from 'react';
import {UserList} from "../components/UserList";
import {ChatHistory} from "../components/ChatHistory";
import {WriteBox} from "../components/WriteBox";

export class AppThunk extends Component {
    render() {
        return (
            <div className="container clearfix">
                <UserList/>
                <div className="chat">
                    <ChatHistory/>
                    <WriteBox/>
                </div>
            </div>
        );
    }
}
