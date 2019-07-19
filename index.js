// Code your solution in this file!
function returnFirstTwoDrivers(array) {
    return array.slice(0, 2)
}
function returnLastTwoDrivers(array) {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
    return (number) => {
        return multiplier * number
    }
} 

// const createFareMultiplier = multiplier => number => multiplier * number 

function fareDoubler(number) {
    return number * 2
}

function fareTripler(number) {
    return number * 3
}

function selectDifferentDrivers(arrayOfDrivers, functionName) {
   return functionName(arrayOfDrivers)
}