import React from 'react'
import { useState,useEffect,useRef} from 'react'


const Counter = () => {

    const [sec,setsec] = useState(0)

    const  [millisec,setmillisec] = useState(0)
    const [min,setmin] = useState(0)

    const [act,setact]  = useState(false)
const minRef = useRef(null)
    const secRef = useRef(null)
const milRef = useRef(null)

useEffect (()=>{
    if(act){
        minStart()
        secStart()
        milliStart()
    }
    return ()=>{
        handleClear()
    }
},[])

const secStart =() =>{
    secRef.current = setInterval(()=>{
      setsec(prev =>{
          if(prev>=60){
              return 0
          }
          return prev+1
      }
      )
    },1000)
}


const minStart =() =>{
    minRef.current = setInterval(()=>{
        setmin(prev => {
            if(sec >= 60){
                return prev+1
            }
           
        }    
            )
    }
    )
}


const milliStart =() =>{
    milRef.current = setInterval(()=>{
        setmillisec(prev => {
        if(prev >= 60){
            return 0;
        }
        return prev+1
    }    
        )
    },100)
}


const handleClear = ()=>{
    clearInterval(secRef.current)
    clearInterval(milRef.current)
    clearInterval(minRef.current)
}

    
    
    
    
    return (
    <div>

        <h1>stop watch</h1>


        <input type= "Number"
        id ="second"
        placeholder="enter seconds"
        onChange ={e=> setsec(Number(e.target.value))} />

<h1>

<span>{min}min      </span><span>{sec}</span>s  <span>{millisec}ms</span>


</h1>

<div  className='buttons'>
    <button onClick ={()=>{
        handleClear()
    }}>
        stop
    </button>
    
    <button onClick ={()=>{
        minStart()
       secStart()
       milliStart()
       setact(!act)
    }}>
        start
    </button>

    <button onClick ={()=>{
      handleClear();
      setmin(0)
      setsec(0)
      setmillisec(0)
    }}>
        restart
    </button>

</div>



        
    </div>
  )
}

export default Counter