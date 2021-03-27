
import React, {useState} from 'react'

function useInput(initialValue = '') {
   const [value, setValue ] = useState(initialValue);
   const onChange = (event) => setValue(event.target.value);

   return {value, onChange}
}

function PersonalInfo(){
   const {value: name, onChange: setName} = useInput();
   const {value: surname , onChange: setSurname} = useInput();
   const {value: age , onChange: setAge} = useInput();
   
   
   return (
      <div>
         <form>
            <input 
               type="text"
               placeholder="Name"
               name="name"
               { ...useInput() }
            />
         <input 
               type="text"
               placeholder="Surname"
               value={surname}
               onChange={setSurname}
            />

            <input 
               type="number"
               placeholder="Age"
               value={age}
               onChange={setAge}
            />                    
         </form>

         <div>{`${name} ${surname}`} has {age} years old</div>
      </div>

   );
}

function App() {
   return(
      <PersonalInfo />
   );
}

export default App;