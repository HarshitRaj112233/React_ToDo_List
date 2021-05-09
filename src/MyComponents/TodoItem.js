import React from "react";

// export const TodoItem = (props) => {
export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      {/* <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p> */}
      <h4>
        {todo.no}
        {":"} {todo.title}
      </h4>

      <p>{todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};
