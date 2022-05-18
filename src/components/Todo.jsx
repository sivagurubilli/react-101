import React, { useState } from 'react'
import Todolist from './Todolist'

function Todo() {
    const [todos,setTodos] = useState([])
    const [todoText,setTodoText] = useState('')
    const handleTodo =()=>{
        let newTodo ={
            text:todoText,
            status:false,
            id:Date.now()
        }
        setTodos([...todos,newTodo])
    }


    const handleStatus= id =>{
        setTodos(
            todos.map(ele=>(ele.id==id?{...ele,status:!ele.status}:ele))
        )
    }
  return (
    <div className='container'>
        <Todolist todos ={todos} handleStatus= {handleStatus} />
        <input type ="text"
        placeholder='write todos'
        value={todoText}
        onChange ={e=>setTodoText(e.target.value)}/>

        <button onClick={handleTodo}>+</button>

    </div>
  )
}

export default Todo