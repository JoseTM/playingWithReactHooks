import React, { Component } from 'react';

class Button extends Component {
   constructor(props){
      super(props);
      this.state = {
         activated: false,
      }
      this.handleAtiveChange = this.handleAtiveChange.bind(this);  // binding de la función handleAcgtiveChange
   }

   handleAtiveChange(){
      // this.setState({activated: !this.state.activated})
      this.setState((prevState) => {
         return{
            activated: !prevState.activated
         }
      }
      )
   }

   render(){
      const buttonText = this.state.activated ? this.props.activeText: this.props.inactiveText;
      return(
         <button onClick={this.handleAtiveChange}>
            {buttonText}
         </button>
      )
   }
}


class  App extends Component {

   render(){
      return(
         <Button 
         activeText="on"
         inactiveText="off"
         />
      )
   }
}

export default App;
