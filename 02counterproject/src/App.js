import React,{useState} from 'react';
import './App.css';

function App() {
    // let counter = 15;

    // const addValue = ( )=> {
    //   console.log("button clicket",counter);
    //   counter = counter +1;
    // } this is manual upadating the counter value in browser console but not able to update it ui in react here the usestate hook comes into picture to change the state of the ui in react

    let [counter,setCounter ] = useState(15);

    // const addValue = ()=> {
    //   if(counter === 25){
    //     setCounter(counter);
    //   } else{
    //   setCounter(counter + 1 ); // here the setCounter is a function to set the new state of the ui
    //   }
    // }

    const addValue = ()=> {
      if(counter < 25 ){
        setCounter(counter + 1);
      }
    }

    // const removeValue = ()=> {
    //   if (counter === 0){
    //      setCounter(counter);
    //   } else {
    //     setCounter(counter -1);
    //   }
    // }

    const removeValue = ()=> {
      if(counter > 0){
        setCounter(counter - 1);
      }
    }

  return (
    <>
    <h1>Mehdi Aur React</h1>
    <h2>Counter Value:{counter}</h2>
    <button onClick = {addValue}>Add Value</button><br/>
    <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
