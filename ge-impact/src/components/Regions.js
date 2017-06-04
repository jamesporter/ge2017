// @flow

import React from 'react';
import Result from "./Result";

export default ({data}) => {

  const regions = Object.keys(data).sort();

  return <div>
    {regions.map((r, idx) => <div key={idx} className="region-container">
      <h1>{data[r].region}</h1>
      {data[r].data.map((d, idx) => <Result data={d}/>)}
    </div>)}
  </div>
}
