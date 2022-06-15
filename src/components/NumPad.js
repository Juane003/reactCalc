import React, { Component } from "react";
import './numpad.css'

class NumPad extends Component{
    constructor(){
        super();
    }
    render(){
        const numbersAndOperationsArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, '+', '-',] ,['=', "CLEAR"]];
        return(
            numbersAndOperationsArray.flat().map((btn, i) => {
                return (    
                    <div className="box">
                        <button key={i}
                            value={btn}
                            type="button"
                            onClick={this.props.clicks}>
                                {btn}
                            </button>
                    </div>
                )
            })
        );
    }
}

export default NumPad;