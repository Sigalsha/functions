//convertWeight ex. 
var convertWeight = function(number, unit){
    if (unit === "kilos") {
        unit = 2.20462262; 
    } else if (unit === "pounds") {
        unit = 0.45359237 ;
    }
    return number *= unit;
}

convertWeight(100, "kilos");
convertWeight(100, "pounds");



//individual exercise 1
var calcAge = function(currentYear, birthYear) {
    return currentYear -= birthYear;
}
var age = calcAge(2017, 1989);


//individual exercise 2
var calcAge = function(currentYear, birthYear) {
    let age1 = currentYear - birthYear;
    let age2 = currentYear - birthYear - 1;
    return "You are either " + age1 + " or " + age2 ;
}
var age = calcAge(2017, 1989);


//bonus
var d = new Date();
var thisYear = d.getFullYear();
var calcAge = function(birthYear) {

    let age1 = thisYear - birthYear;
    let age2 = thisYear - birthYear - 1;
    return "You are either " + age1 + " or " + age2 ;
}
var age = calcAge(1989);


//individual exercise 3
let isPrime = function(num) {
    if (num % 2 != 0 && num % 3 != 0) {
        return true;
    } else {
        return false;
    }
}
isPrime(13);


//individual exercise 4
let arrAvg = function(arr) {
    let arrSum = 0;
    for (let i = 0; i < arr.length ; i++) {
        arrSum += arr[i]; 
    }
    arrSum /= arr.length;
    return arrSum;
}
arrAvg([3, 3, 3]);


//individual exercise 5
var numInArr = function(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            return true;
        } else {
            return false;
        }
    }
}
numInArr([2, 2, 2], 3);


//individual exercise 6
let smallerThanNum = function(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            console.log(arr[i]);
        }      
    }
}
smallerThanNum([1, 2, 3], 3);
