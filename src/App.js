import React, {useState} from 'react'

function App(){

   const [counter, setCounter] = useState(0)
   const handleClick = () => setCounter(counter + 1);

   return( 
      <div>
         <button onClick={handleClick}> 
            +1
         </button>         
         <h1>
            { counter }
         </h1>
      </div> 
   );
}

export default App;