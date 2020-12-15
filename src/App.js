import React from 'react';
import Comp_A from './components/1_create_lifecycle/Comp_A';
import ClickCounter from './components/render_props/part_1/ClickCounter';
import Hovercounter from './components/render_props/part_1/HoverCounter';

import CounterLogic from './components/render_props/part_2/CounterLogic'; 
import MyClickCounter from './components/render_props/part_2/MyClickCounter';
import Myhovercounter from './components/render_props/part_2/MyHoverCounter';

import Counter_Logic from './components/render_props/part_3/Counter_Logic'; 
import My_Click_Counter from './components/render_props/part_3/My_Click_Counter';
import My_Hover_Counter from './components/render_props/part_3/My_Hover_Counter';

import ClickCounterComp from './components/hoc_component/ClickCounterComp';
import HoverCounterComp from './components/hoc_component/HoverCounterComp';

import Component_A from './components/learn_context/Component_A';
import Component_C from './components/learn_context/Component_C';

import {UserProvider} from './components/learn_context/userContext';
import Inputcomp from './components/learn_reference/part_1/InputComp';
import Focus_Comp_Parent from './components/learn_reference/part_2/FocusCompParent';
import Focusparentcomp from './components/learn_reference/part_3/FocusParentComp';
function App() {
  return (
    <div className="App">
    <div>
    <h1>Learning HOC</h1>
      <ClickCounterComp />
      <br/>
      <HoverCounterComp/>
    </div>

    <hr/>

<div >
<h1>Learning Render Props</h1>
  <div>Part 1 : Lets Learn Need for Render Props...</div>
      <ClickCounter/>
        <br/>
    <Hovercounter />
</div>
<hr/>
<div>
  <div>Part 2 : Lets see implementation of Render Props...</div>
  <CounterLogic render={ (count,incrementCount) => (<MyClickCounter count={count} incrementCount={incrementCount}/>)}  />
  <CounterLogic render={(arg1,arg2)=> (<Myhovercounter myCount={arg1} myIncrementCounter={arg2} /> )} />
</div>

<hr/>
<div>
  <div>Part 3 : Lets see implementation of Render Children </div>
  <Counter_Logic>
    {
    (count,incrementCount) => (<MyClickCounter count={count} incrementCount={incrementCount}/>)
    }  
  </Counter_Logic> 

  <Counter_Logic>
  {
  (arg1,arg2)=> (<Myhovercounter myCount={arg1} myIncrementCounter={arg2} /> )
  } 
    </Counter_Logic>
</div>
    
    <hr/>
    <h1>Learning Context</h1>
<Component_A />
<br/>


<UserProvider value = {{id:123, name:'Swatantra', organization:'Sapient' }}>
    <Component_C />
</UserProvider>
<hr/>
<h2>Learning Ref : Part 1 : Focusing in Same Component</h2>
<Inputcomp />
<br/> <br/> <br/>
<h2>Learning Ref : Part 2 : Focusing in Child Component </h2>
<Focus_Comp_Parent />
<h2>Learning Ref : Part 2 : Focusing in Child Component Using Forward Reference</h2>
<Focusparentcomp />
    </div>
  );
}

export default App;
