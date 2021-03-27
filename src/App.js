import React, {createContext, useState, useContext} from 'react'


const NameContext = createContext();


function Child() {
   return (
      <section className="child">            
            <GrandChild />            
      </section>
   );
   
}
function GrandChild(){
   return (
      <div className="grandchild">
         <Button />
      </div>
   );
}

function Button() {
   const name = useContext(NameContext);
   return (
      <button>{name}</button>
   );
}

function App() {
   const [name, SetName] = useState('Billy Shakespeare');

   return (
      <div>
         <NameContext.Provider value={name}>
            <Child />
         </NameContext.Provider>
      </div>
   );
}

export default App;