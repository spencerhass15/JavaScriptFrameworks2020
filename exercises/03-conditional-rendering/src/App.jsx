import React from "react";
import todos from "./data/todos";
import Todo from "./Components/Todo";

function App() {
  return <div><Todo todos={todos} showCompleted={false} /></div>;
}

export default App;
