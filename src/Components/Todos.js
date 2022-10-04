import React, { useContext } from "react";
import { DELETE_TODO } from "../Context/action.types";
import TodoContext from "../Context/TodoContext";

const Todos = () => {
  const { todos,dispatch } = useContext(TodoContext);
  return (
    <div class="list-group Todos">
      {todos ? todos.map((todo) => (
        <label class="list-group-item">
          <input id={todo.id} class="form-check-input me-3" type="checkbox" value="" onClick={(e) => {
            dispatch({
                type: DELETE_TODO,
                payload: todo.id
            });
          }} />
          {todo.message}
        </label>
      )) : ''}
    </div>
  );
};

export default Todos;
