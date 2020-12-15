import React, { Component } from 'react'

class Inputcomp extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    focusTextbox = () => {
        console.log('inputRef : ' , this.inputRef);
        this.inputRef.current.focus();
    }

    render() {
        return (
           <div>
               Name : <input type="text" ref={this.inputRef} />
               <br/>
               <button onClick={this.focusTextbox}>Focus </button>
           </div>
        )
    }
}
export default Inputcomp;
