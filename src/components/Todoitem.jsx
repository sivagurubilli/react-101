import React from 'react'

function Todoitem({todo,handleStatus}) {
  return (
    <div className='todo'>

        <h3 style={{textDecoration:`${todo.status?'lne-through':'none'}`}}>
        {todo.text}</h3>

        <p style={{color:`${todo.status?'green':'red'}`}}>
            {todo.status? 'Done ✔': 'Pending  X'}
        </p>

        <button onClick={()=>handleStatus(todo.id)}>
            {!todo.status ? 'Mark ascompleated':'remove'}
        </button>
    </div>
  )
}

export default Todoitem