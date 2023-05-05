import React, {Component,useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './compoents/Greet'; 
// we can import the component with any name

import ClassComponent from './compoents/Welcome';
import Nav from './Nav';

class App extends Component {
  
  constructor(){ // initial state
    super();
    this.state = {
      show : true
    }
    console.warn("constructor");
  }

  componentDidMount(){ // un mounting state
    console.warn("componentDidMount")
  }

  render(){ // updating state
    console.warn("render");
    return (
      <div className="App">
  
          <p>Let's Learn Life Cycle Methods</p>

          {
            this.state.show ? <Nav /> : null
          }
          
    {/*here i make show property of the state object as true and false 
    according to the clicking on the button */}      
          <button onClick={() => {this.setState({show: !this.state.show})}}>Toggle Nav</button>
    
          {/* <FunctionalComponent /> 
          <ClassComponent/> */}
      </div>
    );
  }
  
}

export default App;
