import React from 'react'

function Counter({intValue,handleCount,mulDouble}) {

  return (
      <div>
<h1 style={{color:intValue %2 ==0 ? "green" :"red"}}> {intValue}</h1>
<button onClick = {()=>handleCount(1)}>Increm</button>
<button onClick = {()=>handleCount(-1)}>Decrem</button>
<button onClick = {mulDouble}>Double</button>


      </div>
    
  )
}

export default Counter