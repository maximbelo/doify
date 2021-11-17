import "./App.scss";
import realtime from "./firebase";
import { ref, onValue, push } from "firebase/database";
import { useState, useEffect } from "react";

function App() {
  // State to hold todo's
  const [todo, setTodo] = useState([]);
  // State to hold the user input
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput) {
      // We create a ref to our realtime db
      const dbRef = ref(realtime);

      // We use push, passing it our dbRef and the value we want to store
      push(dbRef, userInput);
      // Reset user input state back to an empty string
      setUserInput("");
    } else {
      // In case there is an empty submission - alert the person to add a sumbission
      // Will likely change the alert to a modal window later
      alert("Please add a task!");
    }
  };

  // We call useEffect with an EMPTY dependancy array which means it will only execute callback function one time, when the component first mounts.
  useEffect(() => {
    // Create a ref for our realtime db - pointing to our specific db
    const dbRef = ref(realtime);
    //  Set up our firebase subscrition - When the onValue fires its callback function (ie. when it connects or sees new data in firebase), it will take a snapshot of your database and pass that snapshot to the callback function.
    onValue(dbRef, (snapshot) => {
      // Grab a snapshot of db and use the .val() to parse the json object that is our db data out of it
      const data = snapshot.val();
      // New empty array to hold tasks
      const tasks = [];
      // Loop through the data object. For each property inside of it, we want to save the task and property name into a new object, and push that object into the tasks array.
      for (let propertyName in data) {
        // Create new local object for each loop iteration:
        const todoObject = {
          key: propertyName,
          todo: data[propertyName],
        };
        tasks.push(todoObject);
      }
      setTodo(tasks);
    });
  }, []);

  return (
    <div className="innerWrapper">
      <h1>Doify!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userTask">Things to do:</label>
        <input
          type="text"
          id="userTask"
          onChange={handleChange}
          value={userInput}
        />
        <button>Add it!</button>
      </form>
      <ul>
        {todo.map((taskItem) => {
          return <li key={taskItem.key}>{taskItem.todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
