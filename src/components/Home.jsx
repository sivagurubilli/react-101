

import { useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";

import "./Home.css"

export const Home =()=>{
   
  const dispatch = useDispatch()
  const todos = useSelector(store=>store.todos.todos)

  const [input,setInput] = useState()
  const handlechange =(e)=>{
    setInput(e.target.value)
  }

  const handlesubmit =()=>{
    dispatch(addtodo(input))
  }

  const navigate = useNavigate()
  const gotoTodo = (e)=>{
    const path = "/todo/"+e.target.parentElement.id;
    navigate(path)
  }
  const handledelete =(e)=>{
    dispatch(delelteTodo(e.target.parentElement.id))

  }

  return (

    <>
    <input type ={'text'} onChange={handlechange}></input>
    <input type ={'submit'} onClick={handlesubmit} value={'submit'}></input>

    {todos.map((e)=>{
        return(
            <div key = {e.id}
            id = {e.id}>
            <span className={e.status ? 'todo-done' :'todo-notdone'}
             onClick ={gotoTodo}
             >
{e.title}
            </span>
            <button onClick={handledelete}>

  Delelte
            </button>



            </div>
        )
    })}
    
    
    </>
  )

}
