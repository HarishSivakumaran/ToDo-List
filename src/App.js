import logo from "./logo.svg";
import "./App.css";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import { useReducer } from "react";
import reducer from "./Context/reducer";
import TodoContext from "./Context/TodoContext";

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
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
      <TodoContext.Provider value={{todos, dispatch}}>
        <Todos />
        <AddTodo />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
