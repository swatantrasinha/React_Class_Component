import React, { Component } from 'react';

// const FocusFunctionalComp = () => {
//     return(
//         <div>
//             BBB
//         </div>
//     )
// }

const FocusFunctionalComp = React.forwardRef((props,ref) => {
    return(
        <div>
           This is Function Comp having textbox : <input type="text" ref={ref} />
        </div>
    )
}

)

export default FocusFunctionalComp;