import React from "react";
import { todos } from "../src/data/todos";
import Todo from "../src/components/todos";

/*
 * Create a component that will iterate over an array of objects. The component will accept two props.
 * The first prop will be named todos and will accept an array of objects.
 * The second prop will take a prop named showCompleted and will accept a boolean.
 * If the second prop is true, it will render the completed items in the todo. If the prop is toggled to false,
 * it will render all the todos that have not been completed.
 *
 * Create a coma
 */

function App() {
  return (
    <div className="App">
      <Todo todos={todos} showCompleted={false} />
    </div>
  );
}

export default App;
