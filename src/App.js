import logo from "./logo.svg";
import "./App.css";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import { useEffect, useReducer } from "react";
import reducer from "./Context/reducer";
import TodoContext from "./Context/TodoContext";
import { GET_TODO } from "./Context/action.types";

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    if (localStorage.getItem("todos")) {
      dispatch({
        type: GET_TODO,
        payload: JSON.parse(localStorage.getItem("todos")),
      });
    }
  }, []);

  return (
    <div className="CustApp">
      <h1
        className="mt-2"
        style={{
          fontFamily: "cursive",
          color: "#ffffff",
          textShadow: "3px 3px 5px",
        }}
      >
        TODO List
      </h1>
      <TodoContext.Provider value={{ todos, dispatch }}>
        <Todos />
        <AddTodo />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
