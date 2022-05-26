import { useState } from 'react'
import logo from './logo.svg'
import Date from "./components/Date"
import Logo from "./components/Logo"
import Button from "./components/Button"
import Company from './components/Company'
import Os from './components/Os'
import Pay from './components/Pay'
import Color from './components/Color'



function App() {
  const [count, setCount] = useState(0)
  const [comp,setcomp]=useState("")
 
const [src,setsrc] = useState("")
const [date,setdate] = useState("")
const [but,setbut] = useState("case study")
const [os,setos] = useState("")

const [color,setcolor] = useState("")
  return (
    <div className="App" style={{backgroundColor:`${color}`}} >
     
     <Date  date={date} setdate={setdate} />
     <Logo src={src} setsrc={setsrc} />
     <Button but={but} setbut={setbut}/>
     <Company comp={comp} setcomp={setcomp} />
     <Pay />
     <Os  os={os} setos={setos}/>
     <Color color={color} setcolor={setcolor}/>
     

    </div>
  )
}

export default App
