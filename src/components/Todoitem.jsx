import React from 'react'



const Todoitem = ({todo,handleStatus}) => {
  return (
    <div className='txtdec'>

        <h3 style={{textDecoration: `${todo.status ? 'line-through' : 'none' }`,}}>
            {todo.text}

        </h3>

        <p style = {{
            color:`${todo.status ? 'green':"red"}`
        }}>
            {todo.status ?'Done':'Pending'}
        </p>

        <button onClick={()=>handleStatus(todo.id)}>
{!todo.status ? 'Mark as compleated' :"removed from compleated"}
        </button>
    </div>
  )
}

export default Todoitem