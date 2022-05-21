import React, { useState } from 'react'
import TodoList from "./Todolist"

const Todo = () => {

const [todos,setTodos] = useState([])
const [todoText,setTodoText] = useState('')
const [showTodos,setShowTodos] = useState(false)


const handleTodo =()=>{
    let  singleTodo ={
        text:todoText,
        status:false,
        id:Math.floor(Math.random()*1000),

    };
    setTodos([...todos,singleTodo]);
    setTodoText('')

};

const handleStatus =id  =>{
    setTodos(todos.map(ele=>(ele.id===id ? {...ele, status:!ele.status}:ele)))
}

  return (
    <div>
  <div className='container'>

      <input  type='text'
      placeholder='write something'
      value={todoText}
      onChange ={e=>setTodoText(e.target.value)}
      />
      <button onClick ={handleTodo}>+

      </button>


  </div>

  
  <TodoList  todos ={todos.filter(ele=>ele.status=== false)}
      handleStatus  ={handleStatus}
      
      />
  <button onClick={()=>{
setShowTodos(!showTodos)
      }}> {showTodos ? "Hide compleated todos" :"show compleated todos"}</button>
{showTodos ? (
    <div className='container'>

        <h2>compleated todos</h2>
        <TodoList  todos ={todos.filter(ele=>ele.status===true)}
        handleStatus ={handleStatus}
   />
   </div>
):null}
    </div>
  )
}

export default Todo
