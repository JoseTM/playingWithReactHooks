import React, {useState} from 'react'

function App(){
   const [place, setPlace] = useState({
                                       city: '',
                                       country: '',
                                    });

   const handleCityChange = (event) => 
      setPlace({  
            ...place,
            city: event.target.value,            
            });
   
   const handleCountryChange = (event) => 
      setPlace({
            ...place,
            country: event.target.value,
            });
   
   return( 
      <form>
         <div>
            <input 
               type="text" 
               placeholder="City" 
               value={place.city}
               onChange={handleCityChange}
            />
         </div>
         <div>
            <input
               type="text" 
               placeholder="Country" 
               value={place.country}
               onChange={handleCountryChange}
            />
         </div>
         <div>
            You live in {place.city}, {place.country}
         </div>
      </form>
   );
}

export default App;