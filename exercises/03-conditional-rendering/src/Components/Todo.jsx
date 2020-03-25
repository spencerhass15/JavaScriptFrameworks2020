import React from "react";
import todos from "../data/todos";



function Todo(props) {

    return <div>
        {props.todos.map((todo) => {
            if (props.showCompleted && todo.completed) {
                return (
                    <p>{todo.title}</p>
                )
            }
            if (!props.showCompleted && !todo.completed) {
                return (
                    <p key={"todo-" + todo.id}>{todo.title}</p>
                )
            }

        })}</div >
}




export default Todo;