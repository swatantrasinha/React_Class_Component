import React, { Component } from 'react'
import EnhancedComp from './EnhancedComp';
class HovercounterComp extends Component {

    render() {
        const count_hover = this.props.myCount;
        const increment_counter = this.props.myIncrementCounter;

        return (
            <div onMouseOver={increment_counter}>
                 Hovered {count_hover} times
            </div>
        )
    }
}

export default EnhancedComp(HovercounterComp);
