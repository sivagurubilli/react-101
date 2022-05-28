

import React from 'react'
import { useState,useRef } from "react"
import { useEffect } from 'react'

const Stopwatch = () => {

    const [count,setCount] = useState(0)
    const [sec,setsec]  = useState(0)
    const ref = useRef(null)

  useEffect(()=>{
      startInterval()
  },[])

const startInterval =()=>{
    ref.current = setInterval(()=>{
        setCount((p)=>p+1)
    },100)
}


  return (
    <div>Stopwatch

{count < 60 ? null : setsec(sec+1)}
{count < 60 ? <p>{count}</p>:setCount(0)}

<h1>{sec}<span>s</span>  <span>{count}</span></h1>


<button onClick ={()=>{
    clearInterval(ref.current)
}}>hide</button>

<button onClick ={()=>{
    startInterval()
}}>start</button>


<button onClick ={()=>{
    clearInterval(ref.current)
    setCount(0)
    setsec(0)
}}>reset</button>

    </div>
  )
}

export default Stopwatch
