import Weather from "./weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React</h1>
        <Weather city="Tokyo" />
      </header>
    </div>
  );
}

export default App;
