import React, {useState, useEffect} from 'react'

function App(){
   
   const [counter, setCounter] = useState(0);
   const sumOnClick = () => setCounter(counter + 1);
   const substractOnClick = () => setCounter(counter - 1);
   const resetOnClick = () => setCounter(0);

   useEffect(
      () => console.log(`im inside useeffect current count is ${counter}`)
      );

   return( 
      <div>
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

export default App;