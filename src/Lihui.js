import React, { Component } from 'react';
import './demo.css';
import { Carousel } from 'antd';
export default class Lihui extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text : "我是李辉",
            weight:"体重:48"
        }
    }
    
    render () {
        return (
            <div>
                <div onClick={()=>this.props.onChaeashkjdkasknge(this.state.text)} className="App">
                    {this.state.text}
                    {this.props.count}
                    <br/>
                    {this.props.height}
                    
                </div>
                <div  onClick={()=>this.props.onlink(this.state.weight)}>
                    点击我
                </div>
            </div>
            
                
        );
    }
}

