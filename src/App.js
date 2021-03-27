
import React, {useState} from 'react'

function useCounter(initialValue = 0, stepValue = 1) {
   const [counter, setCounter] = useState(initialValue);
   const sumOnClick = () => setCounter(counter + stepValue);
   const substractOnClick = () => setCounter(counter - stepValue);
   const resetOnClick = () => setCounter(initialValue);

   return {counter, sumOnClick, substractOnClick, resetOnClick};
}

function Display(props) {
   const {counter, sumOnClick, substractOnClick, resetOnClick} = useCounter(props.start, props.step);
   
   return (
      <div id="display">
         <button onClick={sumOnClick}> 
            increase
         </button>
         <button onClick={substractOnClick}> 
            decrease
         </button>  
         <button onClick={resetOnClick}> 
            reset
         </button>  
         <h1>
            { counter }
         </h1>
      </div> 
   );
}

function FuncyDisplay(props) {
   const {counter, sumOnClick, substractOnClick, resetOnClick} = useCounter(props.start, props.step);
   
   return (
      <section id="funcyDisplay">
         <button onClick={sumOnClick}> 
            increase
         </button>
         <button onClick={substractOnClick}> 
            decrease
         </button>  
         <button onClick={resetOnClick}> 
            reset
         </button>  
         <h1>
            { counter }
         </h1>
      </section> 
   );
}


function App() {
   
   return( 
      <div>
         <Display start={10}/>
         <Display start={20} step={4}/>
         <Display />
         <FuncyDisplay start={50}/>
      </div>
   );
}

export default App;