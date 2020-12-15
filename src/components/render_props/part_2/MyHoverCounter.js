import React, { Component } from 'react'

class Myhovercounter extends Component {

    render() {
        const {myCount,myIncrementCounter} = this.props;
        return (
            <div onMouseOver={myIncrementCounter}>
                My Hover Counter : {myCount} times hovered !!!
       
            </div>
        )
    }
}
export default Myhovercounter;

