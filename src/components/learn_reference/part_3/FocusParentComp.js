import React, { Component } from 'react';
import FocusFunctionalComp from './FocusFunctionalComp';

class Focusparentcomp extends Component {
    constructor(props) {
        super(props);
        this.myref = React.createRef();

    }
    focusHandler = () => {
        console.log('focusHandler !!! ' , this.myref);
        this.myref.current.focus();
    }

    render() {
        return (
            <div>
            <button onClick={this.focusHandler} >Focus</button>
                <FocusFunctionalComp ref={this.myref} />
            </div>
        )
    }
}

export default Focusparentcomp;
