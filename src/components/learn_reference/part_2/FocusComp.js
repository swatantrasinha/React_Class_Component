import React, { Component } from 'react'

class Focuscomp extends Component {
    constructor(props) {
        super(props);
        console.log(this);
        this.inpRef = React.createRef();
    }

    focusFunc = () => {
        console.log('focusFunc  !!!');
        this.inpRef.current.focus();
    }

    render() {
        return (
            <div>
                This is Focus Comp : <input type="text" ref={this.inpRef} />
            </div>
        )
    }
}

export default Focuscomp;
