// @flow

import React from 'react';

export default ({parties, partyKeys, data: d}) => {

  const processedData = partyKeys
    .map(p => ({party: parties[p].name, votes: d[p], colour: parties[p].colour}))
    .filter(v => v.votes > 0)
    .sort((a,b) => b.votes - a.votes);

  if(processedData[0] && processedData[0].votes > 10000){
    return <div className="constituency">
      <h2 className="item-title" style={{backgroundColor: processedData[0] && processedData[0].colour}}>{d["Constituency Name"]}</h2>

      {processedData.map((p, pIdx) => <div key={pIdx}>
        <p style={{color: p.colour}}>{p.party} {p.votes}</p>
      </div>)}
      {/*<pre>{JSON.stringify(d, null, 2)}</pre>*/}
    </div>
  } else {
    return <div className="constituency">
      <h2 className="item-title" style={{backgroundColor: "#444444"}}>{d["Constituency Name"]}</h2>
      <em>Other</em>
    </div>
  }
}