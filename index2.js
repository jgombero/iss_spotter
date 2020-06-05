const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    for (const passTime of passTimes) {
    const date = new Date(0);
    date.setUTCSeconds(passTime.risetime);
    const duration = passTime.duration;
    
    console.log(`Next pass at ${date} for ${duration} seconds`);
    }
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  })

