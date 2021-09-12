// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(array){
    const newArray = [array[0], array[1]];
    return newArray;
}

const returnLastTwoDrivers = function(array){
    const newArray = [array[array.length - 2], array[array.length - 1]];
    return newArray;
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(fare){
    return function(){
        return fare * fare;
    }
} 

function fareDoubler(fare){ 
    const multipliedFare = createFareMultiplier(fare);
    const doubled = (multipliedFare() / fare) * 2;
    return doubled;
}

function fareTripler(fare){
    const multipliedFare = createFareMultiplier(fare);
    const tripled = (multipliedFare() / fare) * 3;
    return tripled; 
}

function selectDifferentDrivers(array, func){
    return func(array);
}

console.log(fareDoubler(5));
console.log(fareTripler(5));