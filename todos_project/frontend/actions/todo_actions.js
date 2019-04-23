export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (arr) => ({
    type: RECEIVE_TODOS,
    todos: arr
});

export const receiveTodo = (todo) => ({
    type: RECEIVE_TODO,
    todo: todo
}); 


