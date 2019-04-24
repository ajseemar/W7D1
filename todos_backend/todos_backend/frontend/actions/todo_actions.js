export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
import * as TodoAPIUtils from './../util/todo_api_util';

export const receiveTodos = (arr) => ({
    type: RECEIVE_TODOS,
    todos: arr
});

export const receiveTodo = (todo) => ({
    type: RECEIVE_TODO,
    todo: todo
}); 

export const fetchTodos = () => dispatch => {
    TodoAPIUtils.fetchTodos()
    .then((todos) => dispatch(receiveTodos(todos)));
};

