import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState({});

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>todolist app </h1>
        <TodoForm addTodo={addTodo} />
      </header>
    </div>
  );
}

export default App;
