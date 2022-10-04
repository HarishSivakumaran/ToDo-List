import { ADD_TODO, DELETE_TODO, GET_TODO } from "./action.types";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case GET_TODO:
        return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
