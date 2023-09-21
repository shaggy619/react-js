import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is my first React app.</p>
        <p>This page is loading since 21st September 2023.</p>
        <a
          className="App-link"
          href="https://github.com/shaggy619"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to find out the best developer of Nepal!
        </a>
      </header>
    </div>
  );
}

export default App;
