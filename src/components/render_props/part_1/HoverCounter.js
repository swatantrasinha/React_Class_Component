import React, { Component } from 'react'

class Hovercounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
                 count:0
        }
    }
    incrementCounter = () => {
        console.log('Hovercounter ==> incrementCounter !!!');
        this.setState((prevState) => ({
            count : prevState.count + 1
        }))
       
    }
 

    render() {
        const count = this.state.count;
        return (
            <div onMouseOver={this.incrementCounter}>
               This is Hovercounter  : {count} times hovered

            </div>
        )
    }
}

export default Hovercounter;
