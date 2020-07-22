import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckClick() {
    toggleComplete(todo.id);
  }
  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div
      style={{
        display: "flex",
        marginLeft: "675px",
        marginTop: "30px",
      }}
    >
      <input type="checkbox" onClick={handleCheckClick} />
      <li
        style={{
          color: "black",
          textDecoration: todo.completed ? "line-through" : null,
          display: "block",
          textAlign: "center",

          fontFamily: "san-serif",
          fontWeight: "bold",
          position: "relative",
          left: "10px",
          bottom: "6px",
        }}
      >
        {todo.task}
      </li>
      <button
        onClick={handleRemoveClick}
        class="btn btn-danger btn-sm"
        style={{
          position: "relative",
          left: "20px",
          bottom: "6px",
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
