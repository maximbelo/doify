import "./App.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  // // We call useEffect with an EMPTY dependancy array which means it will only execute callback function one time, when the component first mounts.
  // useEffect(() => {
  //   // Create a ref for our realtime db - pointing to our specific db
  //   const dbRef = ref(realtime);
  //   //  Set up our firebase subscrition - When the onValue fires its callback function (ie. when it connects or sees new data in firebase), it will take a snapshot of your database and pass that snapshot to the callback function.
  //   onValue(dbRef, (snapshot) => {
  //     // Grab a snapshot of db and use the .val() to parse the json object that is our db data out of it
  //     const data = snapshot.val();
  //     console.log(data);
  //     // New empty array to hold tasks
  //     const tasks = [];
  //     // Loop through the data object. For each property inside of it, we want to save the task and property name into a new object, and push that object into the tasks array.
  //     for (let propertyName in data) {
  //       // Create new local object for each loop iteration:
  //       const todoObject = {
  //         key: propertyName,
  //         todo: data[propertyName],
  //       };
  //       tasks.push(todoObject);
  //     }
  //     setTodo(tasks);
  //   });
  // }, []);

  return (
    <div className="innerWrapper">
      <h1>Doify!</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
