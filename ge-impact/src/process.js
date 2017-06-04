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
    })
  },
  regions(processedMain, regions, parties){
    //Just apply overall to subsets (regions)?
    return regions
      .map(r => ({
        data: process.overall(processedMain
          .filter(cd => cd.region === r), parties),
      region: r}));
  }
};

export default process;