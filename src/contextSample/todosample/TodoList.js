import React, { useContext } from 'react'

import { Context } from './TodoContext'

const TodoList = () => {
    const {todo} = useContext(Context)
  return (
    <div>
         <ul>
            {
              todo.length > 0 ?    todo.map((item,key)=> {
                  return <li key={key}>{item.title}  - {item.description}</li>
                })
                :
                <h1>PLEASE ADD TODO</h1>
            }
         </ul>
    </div>
  )
}

export default TodoList
