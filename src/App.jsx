import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)
  const handleCount =(val)=>{
    setCount(count+val)
  }

  const mulDouble =()=>{
    setCount(count*2)
  }

  return (
    <div className="App">
      <Counter  intValue={count} handleCount={handleCount} mulDouble={mulDouble} />
     
    </div>
  )
}

export default App
