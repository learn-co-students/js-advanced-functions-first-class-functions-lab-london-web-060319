const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = (drivers) => {

  return drivers.map(driver => {
    return driver
  }).slice(0,2)

}

const returnLastTwoDrivers = (drivers) => {
  return drivers.map(driver => {
    return driver
  }).slice(2,4)

}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];


const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};
