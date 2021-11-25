import "./App.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <section className="todoApp">
      <div className="innerWrapper">
        <h1>Doify!</h1>
        <TodoForm />
        <TodoList />
      </div>
      <footer>
        <p>Created by Maxim Belomestnov.</p>
      </footer>
    </section>
  );
}

export default App;
