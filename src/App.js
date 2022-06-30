import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary App</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by Celena Alvarado{" "}
          <a href="https://github.com/celenaal/dictionary-app">(source code)</a>
        </footer>
      </div>
    </div>
  );
}
