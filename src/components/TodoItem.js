import realtime from "./firebase";
import { useState } from "react";
import { ref, update, remove } from "firebase/database";
import { RiDeleteBinFill } from "react-icons/ri";
import { HiPencilAlt, HiOutlineCheckCircle } from "react-icons/hi";

const TodoItem = ({ todo }) => {
  // State to hold updated task
  const [newTask, setNewTask] = useState("");

  // Function to update todo item
  const handleChange = (e) => {
    todo.userInput = "";
    setNewTask(e.target.value);
  };

  // Function to complete Todo item
  const completeTodo = () => {
    const todoListRef = ref(realtime, `Todo List/${todo.id}`);
    // Toggle the completed property on click
    update(todoListRef, { completed: !todo.completed });
  };

  // Function to edit Todo item
  const editTodo = () => {
    const todoListRef = ref(realtime, `Todo List/${todo.id}`);

    update(todoListRef, { userInput: newTask });
  };

  // Function to delete Todo item
  const deleteTodo = () => {
    const todoListRef = ref(realtime, `Todo List/${todo.id}`);

    remove(todoListRef);
  };

  return (
    <li className={todo.completed ? "complete" : null}>
      <input
        type="text"
        value={todo.userInput === "" ? newTask : todo.userInput}
        className="list"
        onChange={handleChange}
        disabled={todo.completed ? true : false}
      />
      <button className="completeTodoBtn" onClick={completeTodo}>
        <HiOutlineCheckCircle />
      </button>
      <button className="editTodoBtn" onClick={editTodo}>
        <HiPencilAlt />
      </button>
      <button className="deleteTodoBtn" onClick={deleteTodo}>
        <RiDeleteBinFill />
      </button>
    </li>
  );
};

export default TodoItem;
