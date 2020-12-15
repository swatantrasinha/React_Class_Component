import React, { Component } from 'react'

 class Counterlogic extends Component {
    constructor(props) {
        super(props);
        this.state = {
               count:0  
        }
    }

    incrementCounter = () => {
        console.log('Counter  ==> incrementCounter !!!');
        this.setState((prevState) => ({
            count : prevState.count + 1
        }))
       
    }

    render() {
        return (
            <div>
                {/* Counter Logic : {this.props.name} and {this.props.value()} */}
                {this.props.render(this.state.count , this.incrementCounter)}
            </div>
        )
    }
}
export default Counterlogic;
