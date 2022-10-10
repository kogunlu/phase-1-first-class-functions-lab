// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// 1st question
function returnFirstTwoDrivers(arr){

    function firstTwoDrivers(arr){
        return [arr[0],arr[1]]
    }
 return firstTwoDrivers(arr)
}

// 2nd question
function returnLastTwoDrivers(arr){
    function lastTwoDrivers(arr){
        return [arr[arr.length-2], arr[arr.length-1]]
    }
    return lastTwoDrivers(arr)
}

// 3rd question
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


// 4th question

const createFareMultiplier = function (fareMultiplier) {
    return function(value) {
      return fareMultiplier * value;
    }
  }

// 5th question
const fareDoubler = createFareMultiplier(2)


// 6th question
const fareTripler = createFareMultiplier(3)


// 7th question
function selectDifferentDrivers(drivers, selectedFunc){
    return selectedFunc(drivers)
}