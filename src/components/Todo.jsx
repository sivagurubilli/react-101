import React from 'react'
import Todolist from './Todolist'

import { useState } from 'react'



const Todo = () => {
    const [todos,setTodos] = useState([])
const [todoText,setTodoText]= useState("")
const [showTodos,setShowtodos] = useState(false)



const handlestatus=(id)=>{
     setTodos(todos.map(ele=>(ele.id===id ? 
        {...ele,status:!ele.status}:ele))
        );
};
const handleChange=(id)=>{
    setTodos(todos.map(ele=>(ele.id===id ? 
       {...ele,status:!ele.status}:ele))
       );
};

const handleTodo =()=>{
    let singleTodo ={
        text:todoText,
        status:false,
        id:Math.floor(Math.random()*1000),
    }
     
    
    setTodos([...todos,singleTodo]);
    
        setTodoText("");
    
};
//={todos.filter(ele=>ele.status===false)
  return (
    <div>
        <div className ="container">
            <Todolist todos ={todos}
            handlestatus ={handlestatus} handleChange={handleChange}/>


            <input type="text"
            placeholder='add todos..'
            value={todoText}
            onChange ={e=>setTodoText(e.target.value)}
            />
            <button onClick ={handleTodo}>++</button>

        </div>
        <div style={{margin:"40px 20px"}}>
<button onClick ={()=>{
    setShowtodos(!showTodos)
}}>{showTodos?'hide compleated todos':"show compleated todos"}</button>

{showTodos ? (
    <div>
        <h2>completed todos</h2>
        <Todolist todos = {todos.filter(ele => ele.status===true)}
        handlestatus={handlestatus} />
    </div>
):null}

</div>
    </div>
  )
}

export default Todo