import saxophone from "./saxophone_cat_400.png";
import "./App.css";
import Cat from "./Cat";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={saxophone} className="App-logo" alt="saxophone_cat" />
        <br />
        <Cat />
        <a href="https://purrcity.org/">Join me here</a>
      </header>
    </div>
  );
}

export default App;
