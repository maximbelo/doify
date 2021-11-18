import realtime from "./firebase";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import { ref, push, onValue } from "firebase/database";

const TodoList = () => {
  // State to hold todo's
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    const todoListRef = ref(realtime, `Todo List`);

    onValue(todoListRef, (snapshot) => {
      // Grab a snapshot of db and use the .val() to parse the json object that is our db data out of it
      const myData = snapshot.val();

      // New empty array to hold tasks
      const tasks = [];

      // Loop through the data object
      for (let id in myData) {
        tasks.push({ id, ...myData[id] });
      }
      setTodoList(tasks);
      console.log(tasks);
    });
  }, []);

  return <ul></ul>;
};

export default TodoList;
