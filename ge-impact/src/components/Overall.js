// @flow

import React from 'react';
import Result from "./Result";

export default ({data, swing, parties}) => {

  return <div>
    <h1>Overall</h1>
    {swing && <h2>Swing from {parties[swing.first].name} to {parties[swing.second].name}</h2>}

    {data.map((d, idx) => <Result data={d}/>)}
  </div>
}
