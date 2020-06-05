const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const passTime of passTimes) {
  const date = new Date(0);
  date.setUTCSeconds(passTime.risetime);
  const duration = passTime.duration;

  console.log(`Next pass at ${date} for ${duration} seconds`);
  }
}

nextISSTimesForMyLocation((error, passTimes) =>  {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  printPassTimes(passTimes);
});