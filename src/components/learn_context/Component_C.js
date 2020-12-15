import React, { Component } from 'react'
import Component_D from './Component_D';
import {MobileProvider} from './mobileContext';

 class Component_C extends Component {
    
    render() {
        return (
            <div>
                This is Component C
                <MobileProvider value = {{make:'Samsung', model:'Galaxy', country:'South Korea' }}>
                     <Component_D />
                </MobileProvider>
                
            </div>
        )
    }
}

export default Component_C;