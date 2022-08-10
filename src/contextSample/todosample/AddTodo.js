import React, { useContext } from 'react'
import { useState } from 'react'
import { Context } from './TodoContext'

const AddTodo = () => {
    const {todo,setTodo} = useContext(Context)

   const [todolist,setTodoList] = useState({title:"",description:""})

   
  
   const saveTodo = () => {
     const {title,description} = todolist;
     if(title && description){
        const _todo = {title,description}
         setTodo([...todo,_todo])
         setTodoList({title:"",description:""})
     }else{
        alert("Plase check inputs")
     }
   }

  return (
    <>
        <div>
        <label>Title</label>
         <input type="text"
         value={todolist.title} 
         onChange={(e) => setTodoList(prev => ({...prev,title:e.target.value}))}  />
        </div>
        
         
         <div>
         <label>Description</label>
         <input 
         type="text"
         value={todolist.description} 
         onChange={(e) => setTodoList(prev => {return{...prev,description:e.target.value}})}/>
         </div>
        <div>
            <button onClick={saveTodo}>Save</button>
        </div>
          
    </>
  )
}

export default AddTodo
