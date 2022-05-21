
import Todoitem from './Todoitem'
import React from 'react'

const Todolist = ({todos,handleStatus}) => {
  return (
    <div className='todos_container'>
{todos.map(e=>(
    <Todoitem key = {e.id} todo ={e} handleStatus ={handleStatus} />
))}
    </div>
  )
}

export default Todolist