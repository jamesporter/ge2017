import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data/data.json"
import main2015 from "./data/main2015.json"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>GE Impact</h1>

        {main2015.map((d, idx) => <div key={idx}>
          <h2>{d["Constituency Name"]}</h2>
          <pre>{JSON.stringify(d, null, 2)}</pre>
        </div>)}
      </div>
    );
  }
}

export default App;
