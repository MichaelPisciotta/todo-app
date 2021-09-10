import React, {useState, useEffect} from 'react';
import Form from "./Form"
import TodoList from "./TodoList"

function TodoContainer(){
    const [todos, setTodos] = useState([])


    useEffect(() => {
      fetch("http://localhost:3000/todos")
        .then((r) => r.json())
        .then(data => setTodos(data));
    }, [])


    function addTodo(newTodo){
       const updatedTodos = [...todos, newTodo]
       setTodos(updatedTodos);

    }

    function onDeleteTodo(id){
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updatedTodos)
    }




    return(
        <div> 
            <Form addTodo={addTodo} />
            <TodoList todos={todos} onDeleteTodo={onDeleteTodo}/>
        </div>
    )
}



export default TodoContainer;