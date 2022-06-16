import React, {useState} from 'react'; 
import NumPad from '../components/NumPad';
import Display from '../components/Display';
import './App.css';

const App = () => {
    const [input, setInput] = useState(0);
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState("");

    const clickHandle = (event) => {
        setInput(+input + event.target.value);
    }
    const sum = () => {
        setOperator('+'); 
        setInput(0);
        setResult(+input + +result);
    }
    const sub = () => {
        setOperator('-');  
        setInput(0);
        setResult(+input - +result);
    }
    const clear = () => {
        setInput(0);
        setResult(0);
        setOperator("");
    }
    const equalSum = () => {
        setInput(0);
        setOperator("");
        setResult(+result + +input);
    }
    const equalSub = () => {
        setInput(0);
        setOperator("");
        setResult(+result - +input);
    }

    return(
      <div className='container'>
          <Display 
          text={input}
          operator={operator}
          result={result}
          />
        <div className='columns'>
          <NumPad clicks={(event)=> {
                            event.target.value === 'CLEAR' ? clear():
                            event.target.value === '+' ? sum():
                            event.target.value === '-' ? sub():
                            event.target.value === '=' &&
                            operator === "+"? equalSum():
                            event.target.value === '=' &&
                            operator === "-"? equalSub():
                            clickHandle(event)
                            }
                        }/>
        </div>
      </div>
    );
}

export default App;