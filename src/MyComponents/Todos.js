import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  const myStyle = {
    minHeight: "70vh",
    marginBottom: "3px",
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className="text-center my-3">Todos list</h3>
      {/* <h5>{props.todos[0]}</h5> */}

      {props.todos.length === 0
        ? "No Todos To Display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.no} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
