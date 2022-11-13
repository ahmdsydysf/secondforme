import logo from './logo.svg';
import './App.css';
import Nav from './header';
import Slider from './handleData';

function App() {
  return (
    <div className="App">
      <Nav logoName='Ahmed' link1={122} link2={['ahmedsayed',20 ]} link3='Category' />
      <Slider />
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
