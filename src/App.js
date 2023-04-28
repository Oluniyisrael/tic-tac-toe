// import logo from './logo.svg';
import './App.css';
import GamePage from './components/gamePage/GamePage';
// import NavBar from './components/navBar/GamePage';
// import GamePage from './gamePage/GamePage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        {/* <NavBar/> */}
        <GamePage/>
        {/* <GamePage/> */}
      </div>
    </div>
  );
}

export default App;
