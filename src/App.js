

function Box(props){
   return (
      <div>
         <h1>This is a stateless functional component</h1>
         <h1>{props.text}</h1>
         <h2>{props.subtitle}</h2>
      </div>
    );
}

function App() {
  return (
      <Box 
         text="hi, Jose"
         subtitle="I hate this shit"
      />
  );
}

export default App;
