import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ref from './components/Ref';
import RefForm from './components/RefForm'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
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
      <Ref/>

      <RefForm/>

      <ScrollToTop/>
    </div>
  );
}

export default App;
