import React, { Component } from 'react'
import {UserConsumer} from './userContext';
import {MobileConsumer} from './mobileContext';

 class Component_F extends Component {
    render() {
        return (
            <div>
                This is Component F and value passed from App component is :
                <UserConsumer>
                    {
                        (passedObj) => {
                            console.log('passedObj is : ' , passedObj);
                            return (
                                    <div>
                                        <h2>Id is : {passedObj.id}</h2>
                                        <h2>Name is : {passedObj.name}</h2>
                                        <h2>Organization is : {passedObj.organization}</h2>
                                    </div>
                            )
                        }
                    }
                </UserConsumer>

                <MobileConsumer>
                    {
                        (mobileObj) => {
                            console.log('mobileObj is : ' , mobileObj);
                            return (
                                    <div>
                                        <h2> Make is : {mobileObj.make}</h2>
                                        <h2>Model : {mobileObj.model}</h2>
                                        <h2>Country : {mobileObj.country}</h2>
                                    </div>
                            )
                        }
                    }
                </MobileConsumer>
            </div>
        )
    }
}

export default Component_F;