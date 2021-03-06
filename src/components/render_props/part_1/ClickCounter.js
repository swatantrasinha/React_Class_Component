import React,{Component} from 'react'

class ClickCounter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
     incrementCounter = () => {
        console.log('ClickCounter => incrementCounter');
        this.setState(( prevState) => {
            return {count : prevState.count + 1 }
        })
    }

    render() {
        const count = this.state.count;
        return (
        <div> 
            This is ClickCounter  : 
            <button onClick={this.incrementCounter} >Clicked {count} times </button>   
        </div>
        )
    }
}

export default ClickCounter;