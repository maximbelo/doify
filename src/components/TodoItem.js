import realtime from "./firebase";
import { useState } from "react";
import { ref, update } from "firebase/database";

const TodoItem = ({ todo, key }) => {
  const handleChange = () => {};
  // Function to complete Todo item
  const completeTodo = () => {
    const todoListRef = ref(realtime, `Todo List/${todo.id}`);
    // Toggle the completed property on click
    update(todoListRef, { completed: !todo.completed });
  };
  // Function to edit Todo item
  const editTodo = () => {};
  // Function to delete Todo item
  const deleteTodo = () => {};

  return (
    <li className={todo.completed ? "complete" : null}>
      <input
        type="text"
        value={todo.userInput}
        className="list"
        onChange={handleChange}
      />
      <button className="completeTodoBtn" onClick={completeTodo}>
        Complete
      </button>
      <button className="editTodoBtn">Edit</button>
      <button className="deleteTodoBtn"> Delete</button>
    </li>
  );
};

export default TodoItem;
