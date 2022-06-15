import { useState } from 'react'

//uniq id oluşturma
function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}


const TodoApp = () => {
    const [todoList, setTodoList] = useState([{ id: 1, title: "temizlik", description: "odayı topla" }])
    const [todo, setTodo] = useState({ title: "", description: "" })

    const addTodo = () => {
        const { title, description } = todo
        const newTodo = {
            id: uuidv4(),
            title: title,
            description: description,
            isCompleted:false
        }
        setTodoList(prev => [...todoList, newTodo])
    }

    const deleteTodo =(id) => {
        if(id){
            const filteredData = todoList.filter(q => q.id !==id)
            setTodoList([...filteredData])
        }

    }

    const deleteAll = () => {
        setTodoList([])
    }

    const completeTodo = (id) => {
        // const toDo = todoList.find(q => q.id === id)
        // toDo.isCompleted = !toDo.isCompleted
        // console.log(toDo);
        // console.log(todoList);
        // setTodoList([...todoList])
        todoList.map(q => {
            if(q.id===id){
                q.isCompleted = !q.isCompleted
                setTodoList([...todoList])
            }else{
                
            }

        })
    }

    const completeAll = () => {
          const _todoList = todoList.map(x => {
             x.isCompleted = true
             return x
          })
          console.log(_todoList);
          setTodoList([..._todoList])
        }

    return (
        <>
            <div>
                <label htmlFor="">Title:</label>
                <input type="text" onChange={(e) => setTodo(prev => { return { ...todo, title: e.target.value } })} />
            </div>

            <div>
                <label htmlFor="">Description:</label>
                <input type="text" onChange={(e) => setTodo(prev => { return { ...prev, description: e.target.value } })} />
            </div>

            <div>
                <button onClick={addTodo}>Add Todo</button>
                <button onClick={completeAll}>Complete All</button>
                <button onClick={deleteAll}>Delete All</button>
            </div>

            <ul>
                {

                  todoList &&  todoList.map((todo, key) => {
                        return <div key={key} style={{backgroundColor: todo.isCompleted ? "red" : null }}>
                            <li>
                                {todo.title}  / {todo.description}
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                                <button onClick={() => completeTodo(todo.id)}>Complete</button>
                            </li>
                        </div>
                    })
                }
            </ul>
        </>
    )
}

export default TodoApp