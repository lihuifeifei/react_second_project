import React, { Component } from 'react';
import './demo.css';
import Lihui from "./Lihui";
import { Carousel } from 'antd';
export default class Demo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count : 0,
            text : '',
            height:160,
            weight:2
        }
    }
    
    render () {
        return (
            <div className="App">
                <div>我是父组件{this.state.text}</div>
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
                <div>
                    {this.state.count}
                </div>
                <a href="#" onClick={()=> {
                    this.setState({count : this.state.count + 1})
                }}>
                    增加
                </a>
                <Lihui
                    onChaeashkjdkasknge={(text)=> {
                        this.setState({text : text})
                    }}
                    onlink={(weight)=>{
                        this.setState({weight:weight })
                    }}
                    count={this.state.count}
                    height={this.state.height}
                />
                <div>{this.state.weight}</div>
            </div>
        );
    }
}

