import React, {Component} from 'react'

class Counter extends Component{
   constructor(props){
      super(props);
      this.state = {
         count:  0,
      };
   };

   componentDidMount(){
      console.log("Im mounted, Im run just one time after first rendering");
   }

   componentDidUpdate(prevProps, prevState){
      console.log("Im updated, Im run after any update of props "+prevState.count);
   }

   componentWillUnmount(){
      console.log("Im been umounted, Im run just before component disapear from DOM")
   }

   render(){
      console.log("im rendering");
      const {count} = this.state;
      return(
         <div>
            <button onClick={() => this.setState({count: count + 1})}>increase</button>
            <button onClick={() => this.setState({count: count - 1})}>decrease</button>
            <h1>{count}</h1>
         </div>
      );
   }
}

class App extends Component {
   constructor(props){
      super(props);
      this.state={
         visible: false,
      }
   };

   render(){
      const { visible } = this.state;
      return(
         <div>
            <button onClick={() =>this.setState({visible: !visible})}>
               show/hide the counter component
            </button>
            { visible && <Counter/>}
         </div>
      );
   }
}

export default App;