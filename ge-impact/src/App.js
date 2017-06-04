import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data/data.json"
import main2015 from "./data/main2015.json"
import meta from "./data/meta.json"
import Constituency from './components/Constituency';

const { parties } = meta;
const partyKeys = Object.keys(parties);

class App extends Component {

  state = {
    view: "constituency"
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>General Election Impact 2017</h1>
        </div>
        <div className="controls">
          <span className={`view-select ${this.state.view === "constituency" ? "active" : ""}`}
                onClick={() => this.setState({view: "constituency"})}>Constituency</span>
          <span className={`view-select ${this.state.view === "region" ? "active" : ""}`}
                onClick={() => this.setState({view: "region"})}>Region</span>
        </div>

        <div className="view">
          {this.renderView()}
        </div>
      </div>
    );
  }

  renderView(){
    return main2015.map((d, idx) => <Constituency data={d} partyKeys={partyKeys} parties={parties}/>);
  }
}

export default App;
