import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO_COMPLETED, UPDATE_TODO } from "../types/todosTypes";

export const addTodo = (title, description) => ({
    type: ADD_TODO,
    payload: {
        title,
        description
    } 
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id 
})

export const toggleTodoCompleted = (id) => ({
    type: TOGGLE_TODO_COMPLETED,
    payload: id 
})

export const updateTodo = (id, {title, description}) => ({
    type: UPDATE_TODO,
    payload: {
        id,
        title,
        description
    } 
})
