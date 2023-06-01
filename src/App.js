import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <footer>
          <a
            href="https://github.com/nadegerodier/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://incomparable-starburst-3e5eae.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Nadege Rodier
          </a>
        </footer>
      </div>
    </div>
  );
}
