// Anonymous Functions
// It is a function that does not have any name associated with it.

// Ex 1
const add = function (x, y) {
    return x + y;
};

const result = add(5, 3);
console.log(result);


// Ex 2
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(function (number) {
    return number * number;
});

console.log(squared); 


// Ex 3
setTimeout(function () {
    console.log("Hello world!");
}, 2000);



// Ex 4
//  ES6
const addNum = (x, y) => x + y;

const addResult = addNum(5, 3);
console.log(addResult);

