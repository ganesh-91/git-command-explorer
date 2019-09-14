import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/header";
import GitCommands from "./components/gitCommands";

import './App.css';

function App() {
  return (
    <div className="App bg-light">
      <Router>
        <Header />
        <main role="main" className="container-fluid pt-5 pb-5">
          <Route path="/git-commands" component={GitCommands}></Route>
        </main>
      </Router>
    </div>
  );
}

export default App;
