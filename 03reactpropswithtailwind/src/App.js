import Card from './Components/Card.jsx'
import aaplogo from './Components/images/aap logo.jpg'
import shiaindialogo from './Components/images/shia india logo.jpg'
import './App.css'

function App() {
  return (
    <>
    <h1 className="bg-green-900 rounded-xl text-center text-white text-3xl underline"  >User Card</h1>
    < Card channel= "Azadari Andhra Pradesh" btnText="www.AzadariAP.com" para="NO:1 Azadari Channel of Andhra Pradesh" image = {aaplogo} />
    < Card channel = "Shia India" btnText = "www.ShiaIndia.com" para = "NO:1 Azadari Channel of Hyderabad" image = {shiaindialogo} />
    </>

  );
}

export default App;
