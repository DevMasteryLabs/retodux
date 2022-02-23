import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO_COMPLETED } from "../types/todosTypes";

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

