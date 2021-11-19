import "./App.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="innerWrapper">
      <h1>Doify!</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
