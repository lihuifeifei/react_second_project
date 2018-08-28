import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, DatePicker } from 'antd';
import Demo from './Demo';
import Lihui_1 from './Lihui_1'
import Lihui_2 from './Lihui_2'
class App extends Component {
    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Button type="primary">Button</Button>
                <DatePicker onChange={()=> {
                }}/>
                <Demo/>
                <Lihui_1/>
                <Lihui_2/>
            </div>
        );
    }
}

export default App;
