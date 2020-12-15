import React, { Component } from 'react'
import Component_B from './Component_B';
 class Component_A extends Component {

    render() {
        return (
            <div>
                This is Component A
                <Component_B />
            </div>
        )
    }
}

export default Component_A;
