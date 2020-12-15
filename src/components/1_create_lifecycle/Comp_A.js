import React, { Component } from 'react'

export default class CompA extends Component {
    constructor(props) {
        super(props);
        console.log('component A - constructor');
        this.state = {
            count:100
        }
    }
componentDidMount(){
    console.log('component A - componentDidMount');
    this.setState({count:200})
}
    render() {
        return (
           <div> This is component A : this.state.count</div>
        )
    }
}
