import { createStore } from "react-redux";

const initialState = {
  todo: []
};

const TodoReducer = (state = initialState, action) => {
  if (action.type === "ADD_DATA") {
    return { ...state, todo: (state.todo = action.payload) };
  }
  return state;
};
export default TodoReducer;
 