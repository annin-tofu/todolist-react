import React from "react";
import TodoForm from "./TodoForm";

function Todolist({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoForm key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default Todolist;
