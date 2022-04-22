import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <a href="https://github.com/LSan14/dictionary-project.git">
            {" "}
            Open Source
          </a>{" "}
          by Lizeth Sandoval Valladares
        </footer>
      </div>
    </div>
  );
}
