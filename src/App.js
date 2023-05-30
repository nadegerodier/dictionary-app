import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <footer className="mt-5">
          <a
            href="https://github.com/nadegerodier/dictionary-app"
            target="_blank"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://incomparable-starburst-3e5eae.netlify.app"
            target="_blank"
          >
            Nadege Rodier
          </a>
        </footer>
      </div>
    </div>
  );
}
