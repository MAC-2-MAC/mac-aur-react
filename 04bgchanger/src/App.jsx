import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className= "w-full h-screen" style= { {backgroundColor:color} }>
      <div className= " bg-red-200 fixed flex flex-wrap justify-center inset-x-0 bottom-12  px-2  ">
        <div className= " flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2" >
          <button onClick= { ()=> { setColor("red")}} className= "outline-none px-4 py-1 rounded-xl text-white shadow-lg" style= { {backgroundColor:"red"}} >Red</button>

          <button onClick = { ()=> {setColor("green")}} className= "outline-none px-4 py-1 rounded-xl text-white shadow-lg" style= { {backgroundColor:"green"}} >Green</button>

          <button onClick= { ()=> { setColor("blue")}} className= "outline-none px-4 py-1 rounded-xl text-white shadow-lg" style= { {backgroundColor:"blue"}} >Blue</button>

          <button onClick= { ()=> { setColor("Pink")}} className= "outline-none px-4 py-1 rounded-xl text-black shadow-lg" style= { {backgroundColor:"hotPink"}} >Pink</button>

          <button onClick= { ()=> { setColor("orange")}} className= "outline-none px-4 py-1 rounded-xl text-white shadow-lg" style= { {backgroundColor:"orange"}} >Orange</button>

          <button onClick= { ()=> { setColor("yellow")}} className= "outline-none px-4 py-1 rounded-xl text-black shadow-lg" style= { {backgroundColor:"yellow"}} >Yellow</button>

          <button onClick= { ()=> { setColor("purple")}} className= "outline-none px-4 py-1 rounded-xl text-white shadow-lg" style= { {backgroundColor:"purple"}} >Purple</button>

          <button onClick= { ()=> { setColor("grey")}} className= "outline-none px-4 py-1 rounded-xl text-black shadow-lg" style= { {backgroundColor:"grey"}} >Grey</button>

          <button onClick= { ()=> { setColor("gold")}} className= "outline-none px-4 py-1 rounded-xl text-black shadow-lg" style= { {backgroundColor:"gold"}} >Gold</button>

          <button onClick= { ()=> { setColor("black")}} className= "outline-none px-4 py-1 rounded-xl text-white shadow-lg" style= { {backgroundColor:"black"}} >Black</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
