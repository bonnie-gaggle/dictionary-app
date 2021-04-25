import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="welcome"/>
        <footer>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a> by Bonnie Hanks
        </footer>
      </div>
    </div>
  );
}

