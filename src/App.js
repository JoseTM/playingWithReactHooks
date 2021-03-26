import React, {useState, useEffect} from 'react'


function Counter(){
   const [counter, setCounter] = useState(0);
   const sumOnClick = () => setCounter(counter + 1);
   const substractOnClick = () => setCounter(counter - 1);
   const resetOnClick = () => setCounter(0);

   useEffect(
      () => {
            console.log(`Im inside useeffect current count is ${counter}`);

            return  () => console.log(`Im removing anything that was setup obove the last count was ${counter}`);
         }
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


function App(){
   const [visible, setVisible] = useState(false);
   const toggleComponentVisibility = () => setVisible(!visible);

   return (
      <div>
         <button onClick={toggleComponentVisibility} >hide/show counter component</button>
         {visible && <Counter />}         
      </div>
   );
}

export default App;