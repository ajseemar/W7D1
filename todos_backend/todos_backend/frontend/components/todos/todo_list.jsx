import React from 'react';
import TodoForm from './todo_form'

class TodoList {
    constructor(){

    }

    render(){
    <>
        <h1>To Do List</h1>
        <TodoForm receiveTodo={receiveTodo} />
        <ul className ="todo list">
            {todos.map(todo => (<li key={todo.id} className="todo item">{todo.title}</li>))}
        </ul>
    </>
    }
}

export default TodoList; 