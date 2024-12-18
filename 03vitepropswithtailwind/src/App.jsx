import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/card'
import aaplogo from './assets/components/images/aap logo.jpg'
import shiaindialogo from './assets/components/images/shia india logo.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className= 'bg-green-900 text-black p-4 rounded-xl mb-4'>User Card</h1>
      < Card  channel = "Azadari Andhra Pradesh" btnText = "www.AzadariAP.com" para = "No:1 Channel in Andhra Pradesh" image = {aaplogo}/>
      < Card  channel = "Shia India" btnText = "www.ShiaIndia.com" para="No:1 channel of hyderabad" image={shiaindialogo}  />
    </>
  )
}

export default App
