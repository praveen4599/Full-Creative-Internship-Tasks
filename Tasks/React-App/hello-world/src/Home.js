import React from "react";

class Home extends React.Component {

    componentWillUnmount(){
        console.warn("ComponentWillUnmount");
    }

    constructor(){ // initial state
        super();
        this.state = {
          currentValue: 0
        }
        console.warn("constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.warn("hooks",props,state);
        return{
                currentValue: props.data * 10
        };
    }
    render(){
        console.warn("render");
        return(<div>
            <h1>currentValue: {this.state.currentValue}</h1>
        </div>) 
    }
}

export default Home;