const process = {
  main(data, parties){
    const partyKeys = Object.keys(parties);
    return data.map(consData => ({
        votes: partyKeys
          .map(p => ({party: parties[p].name, votes: consData[p], colour: parties[p].colour, partyCode: p}))
          .filter(v => v.votes > 0)
          .sort((a,b) => b.votes - a.votes),
        name: consData["Constituency Name"],
        region: consData["Region"],
        electorate: consData["Electorate"]
    })).filter(cd => cd.votes[0] && cd.votes[0].votes > 10000);
  },
  overall(processedMain, parties){
    const partyKeys = Object.keys(parties);

    return partyKeys.map(k => {
      const partyData = processedMain.filter(cd => cd.votes[0] && cd.votes[0].partyCode === k);
      return {
        party: parties[k],
        constituencies: partyData.length,
        constituencyNames: partyData.map(pd => pd.name)
      }
    }).sort((a,b) => b.constituencies - a.constituencies);
  },
  regions(processedMain, regions, parties){
    //Just apply overall to subsets (regions)?
    return regions.sort()
      .map(r => ({
        data: process.overall(processedMain
          .filter(cd => cd.region === r), parties)
          .filter(c => c.constituencies > 0),
      region: r}));
  },
  perturb(data, parties){
    const partyKeys = Object.keys(parties);
    const swing = process.swing(partyKeys);

    console.log(swing);

    if(swing) {
      return {
        perturbed: data.map(d => {
          return {
            ...d,
            [swing.first]: d[swing.first] * 0.75,
            [swing.second]: d[swing.second] + d[swing.first] * 0.25
          };
        }),
        swing
      }
    } else {
      return data;
    }
  },
  swing(arr){
    const first = arr[Math.floor(Math.random() * arr.length)];
    const second = arr[Math.floor(Math.random() * arr.length)];

    if(first !== second){
      return {first, second};
    } else {
      process.swing(arr);
    }
  }
};

export default process;