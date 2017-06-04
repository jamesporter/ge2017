// @flow

import React from 'react';
import Result from "./Result";

export default ({data, swing, parties}) => {

  const regions = Object.keys(data).sort();

  return <div>
    {swing && <h2>Swing from {parties[swing.first].name} to {parties[swing.second].name}</h2>}

    {regions.map((r, idx) => <div key={idx} className="region-container">
      <h1>{data[r].region}</h1>
      {data[r].data.map((d, idx) => <Result data={d}/>)}
    </div>)}
  </div>
}
