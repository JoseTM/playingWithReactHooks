import React, {useState} from 'react'

function App(){
   const [city, setCity] = useState('')
   const [country, setCountry] = useState('');

   const handleCityChange = (event) =>  setCity(event.target.value);   
   const handleCountryChange = (event) => setCountry(event.target.value);
   
   return( 
      <form>
         <div>
            <input 
               type="text" 
               placeholder="City" 
               value={ city }
               onChange={ handleCityChange }
            />
         </div>
         <div>
            <input
               type="text" 
               placeholder="Country" 
               value={ country }
               onChange={ handleCountryChange }
            />
         </div>
         <div>
            You live in { `${city},  ${country}` }
         </div>
      </form>
   );
}

export default App;