import saxophone from "./saxophone_cat_400.png";
import "./App.css";
import Cat from "./Cat";
import Posts from "./Posts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={saxophone} className="App-logo" alt="saxophone_cat" />
        <br />
        <Cat />
        <a href="https://purrcity.org/">Post what you want</a>
        <Posts />
      </header>
    </div>
  );
}

export default App;
