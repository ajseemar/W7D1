import React from 'react';
import TodoList from './todo_list';
import {connect} from 'react-redux';
import {receiveTodo, fetchTodos} from './../../actions/todo_actions';
import allTodos from './../../reducers/selectors';


const mapStateToProps = state => ({
    todos: allTodos(state) 
}); 

const mapDispatchToProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)), 
    fetchTodos: todos => dispatch(receiveTodos(todos))
}); 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
