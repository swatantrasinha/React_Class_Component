import React, { Component } from 'react';
import EnhancedComp from './EnhancedComp';

class ClickcounterComp extends Component {
       
    render() {
        const {myCount,myIncrementCounter} = this.props;
        return (
           <div>
               <span> Click Counter by {this.props.name} </span>
        <button onClick={myIncrementCounter}> Clicked {myCount} times </button>

           </div>
        )
    }
}
export default EnhancedComp(ClickcounterComp);