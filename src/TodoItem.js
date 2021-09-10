import React, {useState} from 'react';

function TodoItem({todo, onDeleteTodo}){
    
    function handleDelete() {
        // persist changes on server
        fetch(`/http://localhost:3000/todos/${todo.id}`, {
            method: "DELETE"
        })
        onDeleteTodo(todo.id)
    }



    return(
        <div> 
        <li>{todo.description}</li>  
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
    )
}



export default TodoItem;

