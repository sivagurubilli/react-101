import React from 'react'

import Todoitem from './Todoitem'



function Todolist({todos,handleStatus}) {
  return (
    <div className='todos_container'>
        {todos.map(e=>(
            <Todoitem key={e.id} todo ={e} handleStatus ={handleStatus} />
        ))}
    </div>
  )
}

export default Todolist