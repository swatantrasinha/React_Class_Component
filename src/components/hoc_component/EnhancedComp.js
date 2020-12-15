import React, { Component } from 'react'
import ClickcounterComp from './ClickCounterComp'

const EnhancedComp = (OriginalComp) => {
    class MyComp extends Component {
        constructor(props){
            super(props);
            this.state = {
                count:0
            }
        }
        incrementCounter = () => {
            console.log('incrementCounter !!!');
            this.setState((prevState) => {
                return {count : prevState.count + 1}
            })

        }
        render() {
            return (
            <div>
           
<OriginalComp myCount={this.state.count} myIncrementCounter={this.incrementCounter} />
            </div>
           
            )
        }
    }
    return MyComp;
}


export default EnhancedComp;
