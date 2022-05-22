

import React from 'react'


const Todoitem = ({todo,handlestatus,handleChange}) => {
  return (
      <>    <div style={{display:"flex"}} className='todo'>
     
     <span>  <input  style={{margin:"-50px 30px"}} type="checkbox" className='check'
       onChange = {()=>handleChange(todo.id)}
      /></span> 
        
      <span> <h2 style ={{textDecoration:`${todo.status ? 'line-through':'none'}`}}>{todo.text}</h2></span>
 <button onClick ={()=>handlestatus(todo.id)}> {!todo.status ? " ✅ ":"  ❌"}</button> 
    </div>
    </>

  )
}

export default Todoitem