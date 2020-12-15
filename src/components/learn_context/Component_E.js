import React, { Component } from 'react'
import Component_F from './Component_F';

 class Component_E extends Component {
    render() {
        return (
            <div>
                This is Component E
                <Component_F />
            </div>
        )
    }
}

export default Component_E;