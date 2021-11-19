import realtime from "./firebase";
import { useState } from "react";
import { ref, push } from "firebase/database";

const TodoForm = () => {
  // State to hold the user input
  const [userInput, setUserInput] = useState("");

  // Function to change toDo
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // Function to update task on form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput) {
      // We create a ref to our realtime db
      const todoListRef = ref(realtime, `Todo List`);

      const todo = {
        userInput,
        completed: false,
      };

      // We use push, passing it our dbRef and the value we want to store
      push(todoListRef, todo);
      // Reset user input state back to an empty string
      setUserInput("");
    } else {
      // In case there is an empty submission - alert the person to add a sumbission
      // Will likely change the alert to a modal window later
      alert("Please add a task!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userTask"></label>
      <input
        type="text"
        id="userTask"
        onChange={handleChange}
        value={userInput}
        placeholder="Enter a Todo..."
      />
      <button>Add it!</button>
    </form>
  );
};

export default TodoForm;
