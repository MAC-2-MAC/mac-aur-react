
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <div>Mehdi aur React</div>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
