import NumPad from '../components/NumPad';
import Display from '../components/Display';
import './App.css';
import React, { Component } from 'react'; 

class App extends Component{
  constructor(){
    super();
    this.state = {
      input: 0,
      result: 0,
      operator: ""
    }
  }
  handleClick = (event) => {
    if(event.target.value === "CLEAR") {
      this.setState({input: 0})
      this.setState({result: 0})
      this.setState({operator: ""})

    } else if(event.target.value === "=") {
        if(this.state.operator === "+"){
        this.setState({input: 0})
        this.setState({result: +this.state.result + +this.state.input})
        this.setState({operator: ""})
      }
      else if(this.state.operator === "-") {
        this.setState({input: 0})
        this.setState({result: +this.state.result - +this.state.input})
        this.setState({operator: ""})
      }
    }           
    else if (event.target.value === "+") {   
      this.setState({operator: '+'})  
      this.setState({input: 0})
      this.setState({result: +this.state.input + +this.state.result})
    } 
    else if(event.target.value === "-") {
      this.setState({operator: '-'})  
      this.setState({input: 0})
      this.setState({result:  +this.state.input - +this.state.result})
    } 
    else { 
      if(this.state.input === 0){
        this.setState({input: event.target.value})
      }else{
        this.setState({input: +this.state.input + event.target.value})
      }
    }
}

  render(){
    return(
      <div className='container'>
          <Display 
          text={this.state.input}
          operator={this.state.operator}
          result={this.state.result}
          />
        <div className='columns'>
          <NumPad clicks={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default App;
