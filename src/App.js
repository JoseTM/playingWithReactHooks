import React, {useState, useEffect} from 'react'


function Counter(){
   const [counter, setCounter] = useState(0);
   const [color, setColor] = useState('salmon');
   const sumOnClick = () => setCounter(counter + 1);
   const substractOnClick = () => setCounter(counter - 1);
   const resetOnClick = () => setCounter(0);
   const togglecolor = () => (color === 'salmon') ? setColor('green') : setColor('salmon') ;

   useEffect(
      () => {
            console.log(`Im inside useeffect current. Count is ${counter}`);

            return  () => console.log(`Im removing anything that was setup above. The last count was ${counter}`);
         },
      [color]
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
         <button onClick={togglecolor}> 
            change color
         </button>  
         <h1 style={{color}} >
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