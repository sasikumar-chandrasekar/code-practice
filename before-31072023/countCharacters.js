// Count Characters:
// Write a function that takes a string as input and counts the occurrences of each character in the string. Return the result as an object where the keys are the characters and the values are the counts.

const str = "Hello, World!";

let count = {};

const stringToArray = str.split('');

for (let i = 0; i < stringToArray.length; i++) {
    count[stringToArray[i]] = (count[stringToArray[i]] || 0) + 1;
}

console.log("count", count);