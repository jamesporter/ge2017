// @flow

import React from 'react';
import Result from "./Result";

export default ({data}) => {

  return <div>
    <h1>Overall</h1>
    {data.map((d, idx) => <Result data={d}/>)}
  </div>
}
