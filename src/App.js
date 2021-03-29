import React, { useState } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Table from './components/Table';
import Form from './components/Form';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  const [ titles, setTitles ] = useState({});
  return (
    <div className="MyApp">
      <Router>
        <Switch>
          <Route path="/form">
            <Form setTitles={setTitles} titles={titles} />
          </Route>
          <Route path="/">
            <Table titles={titles} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
