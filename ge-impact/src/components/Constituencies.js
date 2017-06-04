// @flow

import React from 'react';
import Constituency from "./Constituency";


export default class Constituencies extends React.Component {
  state = {
    filter: ""
  };

  render(){
    return <div className="container">
      {this.props.main2015.map((d, idx) => <Constituency data={d} partyKeys={this.props.partyKeys} parties={this.props.parties}/>)}
    </div>
  }
}