import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="hero-dictionary">
        <header>Dictionary</header>
      </div>

      <Dictionary defaultKey="love" />
      <footer>
        This webpage was coded by Carlotta Missiroli and is open-sourced on{" "}
        <a
          href="https://github.com/Lottipopps/react-dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
