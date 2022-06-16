import React from "react"
import './display.css'

const Display = ( {text, operator, result }) => {
    return(
        <div className="display">
            <h2 className="text">Input: {text}</h2>
                <h2 className="text">{operator}</h2>
                <h2 className="text">Resultado: {result}</h2>
            </div>
    )
}





export default Display;