import * as types from './actionTypes';


export const completeTodo = (todo) => (
    console.log(todo, 'todo'),
    {
        type: types.COMPLETE_TODO,
        payload: todo,
    })

export const addTodo = (todo) => (
    console.log(todo, 'add'),
    {
        type: types.ADD_TODO,
        payload: todo,
    })
export const removeTodo = (todo) => ({
    type: types.REMOVE_TODO,
    payload: todo,
})
export const updateTodo = (todo) => ({
    type: types.UPDATE_TODO,
    payload: todo
})
