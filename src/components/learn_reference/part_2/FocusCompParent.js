import React, { Component } from 'react'
import FocusComp from './FocusComp';
class Focus_Comp_Parent extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();

    }
    focusChildCompTextbox = () =>{
        console.log('focusChildCompTextbox !!! ' , this.componentRef.current);
        this.componentRef.current.focusFunc();
    }
    render() {
        return (
           <div>
               This is FocusCompParent :  <button onClick={this.focusChildCompTextbox} >Focus</button>
               <br/>
               <FocusComp ref={this.componentRef}/>
              
           </div>
        )
    }
}
export default Focus_Comp_Parent;
