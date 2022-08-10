import React, { useContext } from 'react'
import AddTodo from './AddTodo'
import { Context } from './TodoContext'
import TodoList from './TodoList'

const TodoMain = () => {
       const {todo,setTodo} = useContext(Context)
    
  return (
    <div>
      <AddTodo/>
      <TodoList/>
    </div>
  )
}

export default TodoMain
