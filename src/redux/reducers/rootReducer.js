import { combineReducers } from "redux";

import walletReducer from "./walletReducer";
import playlistReducer from "./playlistReducer";
import todosReducer from "./todosReducer";

const rootReducer = combineReducers({
    todos: todosReducer
})

export default rootReducer;