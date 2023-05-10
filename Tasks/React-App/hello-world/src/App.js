import React, {Component,useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './compoents/Greet'; 
// we can import the component with any name

import ClassComponent from './compoents/Welcome';
import Nav from './Nav';
import Home from './Home';

class App extends Component {
  
  constructor(){ // initial state
    super();
    this.state = {
      show : true,
      counter : 0,
      data: 0
    }
    console.warn("constructor");
  }

  componentDidMount(){ // un mounting state
    console.warn("componentDidMount")
  }
  componentDidUpdate(){
    console.warn("method called")
  }
  render(){ // updating state
    console.warn("render");
    return (
      <div className="App">
  
          <p>Let's Learn Life Cycle Methods</p>

          {
            this.state.show ? <Child />: null
          }
          
    {/*here i make show property of the state object as true and false 
    according to the clicking on the button */}      
          <button onClick={() => {this.setState({show: !this.state.show})}}>Toggle Child</button>
    
          <FunctionalComponent /> 
        {/* <ClassComponent/>
           <Child />
           <Nav /> */}
          <h1>Component Will Unmount</h1>
         <h1>ComponentDidUpdate Life Cycle Method</h1>
         <button onClick={() => this.setState({counter:this.state.counter+1})}>Update counter {this.state.counter
  }</button>
          <h1> Get Derived State From Props {this.state.data}</h1>
          <button onClick={() => {this.setState({data:this.state.data+1})}}>Make ++</button>
          <Home data={this.state.data}/>
      </div>
    );
  }
  
}

class Child extends Component {
  
  componentWillUnmount(){
    console.warn("Component is hidden now"); 
    // When it is supposed to toggled the component is hidden
  }

  render() {
    return (
      <div>
        <h1>Child Component</h1>
      </div>
    )
  }
}
export default App;
