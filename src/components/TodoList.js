import React from 'react';
import TodoInput from './TodoInput';
import './css/TodoList.css';
import Todo from './Todo'
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodo, addTodo, removeTodo, updateTodo } from '../redux/actions/action';

const TodoList = () => {
    const state = useSelector((state) => ({ ...state.todos }));
    let dispatch = useDispatch()
    const create = (newTodo) => {
        dispatch(addTodo(newTodo))
    }
    const update = (id, updatedTask) => {
        dispatch(updateTodo({ id, updatedTask }))
    }
    return (
        <div className="TodoList">
            <h1>Todo App with React Redux</h1>
            <TodoInput createTodo={create} />
            <ul>
                <div className="todo-list">
                    {state.todos && state.todos.map((todo) => {
                        return (
                            <ul key={todo.id} className="todo">
                                <Todo
                                    key={todo.id}
                                    id={todo.id}
                                    task={todo.task}
                                    completed={todo.completed}
                                    toggleTodo={() => dispatch(completeTodo(todo))}
                                    removeTodo={() => dispatch(removeTodo(todo))}
                                    updateTodo={update}
                                />
                            </ul>
                        )
                    })}
                </div>
            </ul>
        </div>
    );
};

export default TodoList;