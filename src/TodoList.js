import React, {useState} from 'react';
import TodoItem from './TodoItem';

function TodoList({todos, onDeleteTodo}){

    return(
        <div>
      <h2>My Todos</h2>
      <ul>
          {todos.map((todo) => <TodoItem  key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />)}
      </ul>
    </div>
    )
}



export default TodoList;