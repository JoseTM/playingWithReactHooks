import React, {useState} from 'react'

function App(){
   console.log(useState(0));
   const [counter, setCounter] = useState(0);
   const sumOnClick = () => setCounter(counter + 1);
   const substractOnClick = () => setCounter(counter - 1);
   const resetOnClick = () => setCounter(0);

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