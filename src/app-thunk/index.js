import React, {Component} from 'react';
import '../css/App.css';
import {Chat} from "./Chat";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
                <Chat/>
            </div>
        );
    }
}

export default App;
