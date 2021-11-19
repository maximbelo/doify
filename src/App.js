import "./App.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <section className="mainContent">
      <div className="innerWrapper">
        <h1>Doify!</h1>
        <TodoForm />
        <TodoList />
      </div>
    </section>
  );
}

export default App;
