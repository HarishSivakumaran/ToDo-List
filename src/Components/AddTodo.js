import React, { useContext } from "react";
import TodoContext from "../Context/TodoContext";
import { ADD_TODO, DELETE_TODO } from "../Context/action.types";
import { v4 } from "uuid";

const AddTodo = () => {
  const { todos, dispatch } = useContext(TodoContext);
  return (
    <div className="input-group mb-3 w-50 Center">
      <input
        id="addTodo"
        type="text"
        class="form-control"
        placeholder="Add your TODO:"
      />
      <button
        class="btn btn-primary"
        type="button"
        id="button-addon2"
        onClick={(e) => {
          dispatch({
            type: ADD_TODO,
            payload: {
              id: v4(),
              message: document.getElementById("addTodo").value,
            },
          });
          document.getElementById("addTodo").value = "";
        }}
      >
        Add
      </button>
    </div>
  );
};
export default AddTodo;
