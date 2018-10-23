import React, {Component} from 'react';
import {AppRoot as AppThunk} from './app-thunk/index';
import './css/App.css';
import './css/login.css'


export class RootApp extends Component {
    render() {
        return (<AppThunk/>);
    }
}
