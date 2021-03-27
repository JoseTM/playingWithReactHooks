import React, {useState, useEffect} from 'react'



function useKeyPress(startingValue){
   const [userText, setUserText] = useState(startingValue);
   
   const handleUserKeyPress = (event) => {
      const { key, keyCode } = event;
      if ( keyCode === 32 || (keyCode >= 65 && keyCode <=90) ){
         setUserText(`${userText}${key}`);
      }
      console.log(keyCode);
   };

   useEffect(
      () => {
         window.addEventListener('keydown', handleUserKeyPress);
         return () => window.removeEventListener('keydown', handleUserKeyPress);
      });
   return userText;
}

function App() {
   
   const userText = useKeyPress('En un lugar de la mancha ');

   return (
      <div>
         <h1>Feel free to type!</h1>
         <blockquote>
            { userText }
         </blockquote>
      </div>
   );
}

export default App;