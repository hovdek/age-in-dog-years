
// my current age
var myAge = document.getElementById("age-textarea").value;

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
// let myName = ' '.toLowerCase();

// creating the text on screen to tell you how old you are in dog years

// document.createTextNode();

// printing the statement of my name, my age, and how old I am in dog years
console.log(`I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

// this is currently turning the submit button into the statement I am trying to get to appear below the submit button. Ideally we would be able to use the submit button multiple times. 
const targetDiv = document.getElementById("third");
const btn = document.getElementById("toggle");

btn.onclick = function () {
    if (targetDiv.style.display == "none") {
        targetDiv.style.display = "block"; 
    } else {
        targetDiv.style.display = "none";
    }
    console.log(`I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
    document.getElementById("toggle").innerHTML = `I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`;
};

