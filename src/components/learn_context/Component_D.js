import React, { Component } from 'react'
import Component_E from './Component_E';

 class Component_D extends Component {
    render() {
        return (
            <div>
                This is Component D
                <Component_E />
            </div>
        )
    }
}

export default Component_D;