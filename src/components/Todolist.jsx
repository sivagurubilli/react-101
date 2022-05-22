import React from 'react'
import Todoitem from './Todoitem'


const Todolist = ({todos,handlestatus,handleChange}) => {
  return (
    <div className='todos-container'>
       
        {todos.map(tod=>(
           
            <Todoitem  key = {tod.id} todo ={tod} handlestatus ={handlestatus} handleChange={handleChange}/>
             
        ))}
        

    </div>
  )
}

export default Todolist