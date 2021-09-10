import React, {useState} from 'react';

function Form({addTodo}){
    const [description, setDescription] = useState("Enter Todo")

    function handleSubmit(e) {
        setDescription("")
        e.preventDefault()
        const todoObj = { 
            todo: { 
                description: description, 
            }
        }
        fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todoObj)
        })
            .then(r => r.json())
            .then(data => addTodo(data.todo))
    };




    return(
        <form onSubmit={handleSubmit}>  
        <h2>Add Todo</h2>

        <label htmlFor="description">Description:</label>

        <input type="text" id="description" value={description} 
        onChange={(e) => setDescription(e.target.value)}/>

        <button type="submit">Add Todo</button>
    </form>

        
    )
}



export default Form;