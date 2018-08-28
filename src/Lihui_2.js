import React, { Component } from 'react';
import { Avatar } from 'antd';
import './demo.css';
export default class Lihui_2 extends Component {
    render () {
        return (
            <div className="container">
                <div className="first">
                    <Avatar size={64} icon="user"/>
                    <Avatar size="large" icon="user"/>
                    <Avatar icon="user"/>
                    <Avatar size="small" icon="user"/>
                </div>
                <div className="second">
                    <Avatar shape="square" size={64} icon="user"/>
                    <Avatar shape="square" size="large" icon="user"/>
                    <Avatar shape="square" icon="user"/>
                    <Avatar shape="square" size="small" icon="user"/>
                </div>
            </div>
        );
    }
}
