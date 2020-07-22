import React, { useEffect, useState } from "react";
import TodoForm from "./componets/TodoForm";
import TodoList from "./componets/TodoList";
function App() {
  const [todos, setTodos] = useState([]);
  const LOCAL_STORAGE_KEY = "react-todo-list-todos";
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <div
      className="App"
      style={{
        background: "ghostwhite",
        height: "1080px",
      }}
    >
      <header className="App-header">
        <h2
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            fontStyle: "bold",
            color: "crimson",
          }}
        >
          TODO LIST
        </h2>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      </header>
    </div>
  );
}

export default App;
