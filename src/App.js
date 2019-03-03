import React, { Component } from 'react';
import './App.css';
import Flexi from "./Flexi";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Domino</h1>
        </header>
          <Flexi
            onSubmit={() => {}}
          />
      </div>
    );
  }
}

export default App;
