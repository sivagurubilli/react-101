import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Ticatactoe from './components/Tica-tac-toe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
     <Ticatactoe />
    </div>
  )
}

export default App
