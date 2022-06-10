// my current age
const myAge = 24;

// variable that will be able to be changed
let earlyYears = 2;

earlyYears *= 10.5;

// we already accounted for the first two years, so we are going to subtract 2 from my age
let laterYears = myAge - 2;

// calculate the number of dog years accounted for by the years later
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;

// setting variable with my name
let myName = 'Kaitlyn Hovde'.toLowerCase();

// printing the statement of my name, my age, and how old I am in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);