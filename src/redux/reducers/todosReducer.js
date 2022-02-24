import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO_COMPLETED, UPDATE_TODO } from "../types/todosTypes";

const initialState = [
  {
    id: "1",
    title: "Learn Node.js",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia culpa ipsum qui minima atque dolor suscipit quis cum accusamus",
    completed: false
  },
  {
    id: "2",
    title: "Learn MongoDB",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia culpa ipsum qui minima atque dolor suscipit quis cum accusamus",
    completed: false
  },
];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { title, description, userId } = action.payload;
      const id = Math.floor(Math.random() * 10000).toString()
      const newTodo = {
        id,
        title,
        description,
        completed: false,
        userId
      }
      return [...state, newTodo];
    }
    case REMOVE_TODO: {
      const id = action.payload;
      return state.filter(todo => todo.id !== id);
    }
    case TOGGLE_TODO_COMPLETED: {
      const id = action.payload;
      return state.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      });
    }
    case UPDATE_TODO: {
      const {id, title, description} = action.payload;
      return state.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            title,
            description
          }
        } else {
          return todo
        }
      });
    }
    default: {
      return state;
    }
  }
}

export default todosReducer;