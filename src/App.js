import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DICTIONARY</h1>
        <main>
          <SearchEngine />
        </main>
      </header>
      <footer>
        Coded by Anna Smirnova and is{" "}
        <a
          href="https://github.com/HannahSmirnova/dictionary-project-anna-smirnova.git"
          rel="GitHub"
        >
          open-sourced
        </a>
      </footer>
    </div>
  );
}

export default App;
