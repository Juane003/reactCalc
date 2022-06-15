import React, { Component } from "react"
import './display.css'
class Display extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="display">
                <h2 className="text">Input: {this.props.text}</h2>
                    <h2 className="text">{this.props.operator}</h2>
                    <h2 className="text">Resultado: {this.props.result}</h2>
                </div>
        )
    }
}

export default Display;