import * as types from '../actions/actionTypes';
import { v4 as uuidv4 } from 'uuid';

const INIT_STATE = {
    todos: [{
        id: 1,
        task: 'Wake up',
        completed: false
    }]
};

const todosReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.COMPLETE_TODO:
            console.log(action, 'complete')
            const toggleTodos = state.todos.map((t) =>
                t.id === action.payload.id ? { ...action.payload, completed: !action.payload.completed } : t);
            return {
                ...state,
                todos: toggleTodos,
            };
        case types.ADD_TODO:
            const newTodo = {
                id: uuidv4(),
                task: action.payload,
                completed: false,
            };

            // const addedTodos = [...state.todos, newTodo];
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        case types.REMOVE_TODO:
            const filterTodo = state.todos.filter((t) => t.id !== action.payload.id);
            return {
                ...state,
                todos: filterTodo,
            }
        case types.UPDATE_TODO:
            const updatedTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        task: action.payload.updatedTask,
                    }
                }
                return todo;
            })
            return {
                ...state,
                todos: updatedTodos,
            }
        default:
            return state;
    }

}

export default todosReducer;