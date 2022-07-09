import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Link, Router, Route } from 'react-router-dom';
import './App.css';
import Fib from './Fib'
import OtherPage from './OtherPage';

function App() {
  return (
    <Router>
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
          <Link to={'/'}>Home</Link>
          <Link to={'/otherPage'}>Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib}/>
          <Route path="/otherPage" component={OtherPage}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
