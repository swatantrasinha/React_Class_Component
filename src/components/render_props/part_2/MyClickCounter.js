import React, { Component } from 'react'

class Myclickcounter extends Component {

    render() {
        const {count,incrementCount} = this.props;
        return (
            <div>
                My Click Counter <button onClick={incrementCount}>Clicked {count} times </button>
            </div>
        )
    }
}

export default Myclickcounter;
