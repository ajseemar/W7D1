import React from 'react';

const TodoList = ({todos}) => (
    <>
        <h1>To Do List</h1>
        <ul className ="todo list">
            {todos.map(todo => (<li key={todo.id} className="todo item">{todo.title}</li>))}
        </ul>
    </>
)

export default TodoList; 