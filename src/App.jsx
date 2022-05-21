import { useState } from 'react'
import logo from './logo.svg'
import Todo from './components/Todo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>My todo List...</h1>
       <Todo />
        
    </div>
  )
}

export default App
