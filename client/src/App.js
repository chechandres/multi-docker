import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";
import Default from './Default';
import Fib from './Fib';

function App() {
  return (
    <div className="App">
      {/*
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
        <Link to="/">Home</Link>
        <Link to="/fib">Fibonacci</Link>
        <NavLink activeClassName="active" to="/fib">
          Fibonacci Sequence
        </NavLink>        
      </header>
      */}
      <div className="link-container">
        <NavLink activeClassName="active" exact to="/">
          Main
        </NavLink>
        <br></br>
        <NavLink activeClassName="active" to="/fib">
          Fibonacci
        </NavLink>
      </div>      
      <Switch>
        <Route path="/" exact component={Default} />
        <Route path='/default' render={() => <Redirect to= "/" />} />
        <Route path="/fib" exact component={Fib} />
      </Switch>        
    </div>
  );
}

export default App;
