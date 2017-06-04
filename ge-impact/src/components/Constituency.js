// @flow

import React from 'react';
import { VictoryChart, VictoryBar } from 'victory';

export default ({parties, partyKeys, data: d}) => {

  const processedData = partyKeys
    .map(p => ({party: parties[p].name, votes: d[p], colour: parties[p].colour}))
    .filter(v => v.votes > 0)
    .sort((a,b) => b.votes - a.votes);


  return <div className="constituency">
    <h2 style={{color: processedData[0] && processedData[0].colour}}>{d["Constituency Name"]}</h2>

    <VictoryChart responsive={false} style={{width: 220, height: 220}}>
      <VictoryBar data={processedData} y={v => v.votes}
      style={{data: {fill: v => v.colour}}}
      />
    </VictoryChart>

    {partyKeys.map((p, pIdx) => <div key={pIdx}>
      <p style={{color: parties[p].colour}}>{parties[p].name} {d[p]}</p>
    </div>)}
    <pre>{JSON.stringify(d, null, 2)}</pre>
  </div>
}