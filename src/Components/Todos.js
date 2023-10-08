import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    const updatedTodos = [...todos, todo];

    setTodos(updatedTodos);
  }

  function removeTodo(task) {
    const updatedTodos = todos.filter(function (todo) {
      return todo.id !== task.id;
    });

    setTodos(updatedTodos);
  }

  function toggleFinished(task) {
    const updatedTodos = todos.map(function (todo) {
      if (todo.id === task.id) {
        todo.finished = !todo.finished;
        return todo;
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            remove={removeTodo}
            toggleFinished={toggleFinished}
          />
        ))}
      </ul>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}
