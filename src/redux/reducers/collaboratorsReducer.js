import { ADD_COLLABORATOR, REMOVE_COLLABORATOR, UPDATE_COLLABORATOR } from "../types/collaboratorsTypes";

const initialState = [
  {
    id: "1",
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442"
  },
  {
    id: "2",
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125"
  },
];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLLABORATOR: {
      const newUser = action.payload;
      newUser.id = Math.floor(Math.random() * 10000).toString()
      return [...state, newUser];
    }
    case REMOVE_COLLABORATOR: {
      const id = action.payload;
      return state.filter(collaborator => collaborator.id !== id);
    }
    case UPDATE_COLLABORATOR: {
      const {id, details} = action.payload;
      return state.map(collaborator => {
        if (collaborator.id === id) {
          return {
            ...collaborator,
            ...details
          }
        } else {
          return collaborator
        }
      });
    }
    default: {
      return state;
    }
  }
}

export default todosReducer;