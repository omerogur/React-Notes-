import { createContext, useState } from "react";


export const Context = createContext(null)


 const TodoProvider = ({children}) => {

   const [todo,setTodo] = useState([])
  
   const values = {todo,setTodo}

    return <Context.Provider value={values}>{children}</Context.Provider>
}

export default TodoProvider;