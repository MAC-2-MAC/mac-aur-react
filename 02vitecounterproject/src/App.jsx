import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15);

  const addValue = ()=> {
    if( count < 25) {
    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 1); // here every setCount method will have callback function which we can use to set the previcount of return them with plus 1 then we can add 4 values 
     
       setCount( count + 1);
       setCount ( count + 1);
       setCount ( count + 1);
       setCount ( count + 1); // here count value will 15 only before the execution of function only only 1 value will be updated here even if we give 4 setCount methods

    // setCount ( ++count + 1);
    // setCount ( ++count + 1);
    // setCount ( ++count + 1);
    // setCount ( ++count + 1); // here we are adding onevalue before the count so 4 values to the four setCount methods and one value for the last + 1 value so totally 5 values will be updated.
    }
  }

  const removeValue = ()=> {
    if( count > 0 ){
    setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Mehdi Aur React</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick= {addValue} >Add Value {count}</button><br/>
      <button onClick= {removeValue} >Remove Value {count}</button>
      <footer>footer {count}</footer>
    </>
  )
}

export default App
