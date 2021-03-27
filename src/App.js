import React, {createContext} from 'react'


const NameContext = createContext();


class Child extends  React.Component {
   render(){
      return (
         <section className="child">            
               <GrandChild />            
         </section>
      );
   };
}
class GrandChild extends  React.Component {
   render(){
      return (
         <div className="grandchild">
            <Button />
         </div>
      );
   };
}
class Button extends  React.Component {
   render(){
      return (
         <NameContext.Consumer>
           {
              valorDeContexto =><button>{valorDeContexto}</button>
           }    
         </NameContext.Consumer>         
      );
   };
}

class App extends  React.Component {
   constructor(props){
      super(props);
      this.state ={
         valorDeEstado: 'Billy Shakespeare',
      }
   }

   render(){
      return (
         <div>
            <NameContext.Provider value={this.state.valorDeEstado}>
               <Child />
            </NameContext.Provider>
         </div>
      );
   };
}

export default App;