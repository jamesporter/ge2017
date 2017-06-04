// @flow

import React from 'react';

export default ({data}) => {
    const {constituencies, constituencyNames, party} = data;
    const {colour, name: partyName} = party;

    return <div>
      <h1 style={{color: colour}}>{partyName} ({constituencies})</h1>
      <div className="result-container">
        {constituencyNames.map((n, idx) => <div key={idx} style={{backgroundColor: colour}} className="square" text={n}/> )}
      </div>
    </div>
}