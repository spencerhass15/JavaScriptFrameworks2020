import React from "react";

const Todos = ({ todos, showCompleted }) => {
  return todos.map((todo, index) => {
    if (showCompleted && todo.completed) {
      return (
        <ul>
          <li>{todo.title}</li>
        </ul>
      );
    }
    if (!showCompleted && !todo.completed) {
      return (
        <ul>
          <li>{todo.title}</li>
        </ul>
      );
    }
  });
};

export default Todos;
