import React from "react";

class Nav extends React.Component {

    componentWillUnmount(){
        console.warn("ComponentWillUnmount");
    }
    render(){
        return <h1>Nav Bar</h1>
    }
}

export default Nav;