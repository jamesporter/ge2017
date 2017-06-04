import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import main2015 from "./data/main2015.json"
import meta from "./data/meta.json"
import Constituencies from './components/Constituencies';
import Overall from "./components/Overall";
import Regions from "./components/Regions";
import process from "./process";


const { parties, regions: regionNames } = meta;
const partyKeys = Object.keys(parties);

const main = process.main(main2015, parties);
const overall = process.overall(main, parties);
const regions = process.regions(main, regionNames, parties);

console.log({main, overall, regions});

class App extends Component {

  state = {
    view: "constituency",
    chaos: false,
    main,
    overall,
    regions
  };

  componentDidMount(){
    setInterval(this.perturb, 5000);
  }

  perturb = () => {
    if(this.state.chaos){
      const perturbed = process.perturb(main2015, parties);
      const main = process.main(perturbed, parties);
      const overall = process.overall(main, parties);
      const regions = process.regions(main, regionNames, parties);
      this.setState({main, overall, regions});
    }
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
          <span className={`view-select ${this.state.view === "overall" ? "active" : ""}`}
                onClick={() => this.setState({view: "overall"})}>Overall</span>

          <div style={{width: 40}} />

          <span className={`view-select ${this.state.chaos}`}
                onClick={() => this.setState({chaos: !this.state.chaos})}>Chaos</span>
        </div>

        <div className="view">
          {this.renderView()}
        </div>
      </div>
    );
  }

  renderView(){
    switch(this.state.view){
      case "constituency":
        return <Constituencies main2015={main2015} partyKeys={partyKeys} parties={parties} />;
      case "region":
        return <Regions data={this.state.regions} />;
      case "overall":
        return <Overall data={this.state.overall} />;
    }
  }
}

export default App;
