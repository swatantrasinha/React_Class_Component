import React, { Component } from 'react'

class My_Hover_Counter extends Component {

    render() {
        const {myCount,myIncrementCounter} = this.props;
        return (
            <div onMouseOver={myIncrementCounter}>
                My Hover Counter : {myCount} times hovered !!!
       
            </div>
        )
    }
}
export default My_Hover_Counter;

