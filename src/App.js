import "./App.scss";

function App() {
  return (
    <div className="innerWrapper">
      <h1>Doify!</h1>
      <form>
        <label htmlFor="userTask">Things to do:</label>
        <input type="text" id="userTask" />
        <button>Add it!</button>
      </form>
    </div>
  );
}

export default App;
