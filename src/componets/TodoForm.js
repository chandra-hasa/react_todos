import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <div style={{ position: "relative" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "block",
          textAlign: "center",
          padding: "3px 3px 3px",
        }}
      >
        <input
          style={{ height: "30px", marginRight: "10px" }}
          name="task"
          type="text"
          value={todo.task}
          onChange={handleTaskInputChange}
        />
        <button
          type="submit"
          class="btn btn-primary btn-sm"
          style={{ position: "relative", bottom: "3px" }}
        >
          Add to List
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
