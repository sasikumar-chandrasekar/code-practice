// Setting timeout for the function
const calculate = (cal) => {
    return cal;
}

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

const addR = calculate(add(1, 2));
const subR = calculate(sub(1, 2));
const divR = calculate(div(1, 2));

console.log("result");

// setTimeout(function () {
//     console.log('setTimeout() function running...');
// }, 500);

// Running this function immediately before any other
setImmediate(function () {
    console.log('setImmediate() function running...');
});

// Directly printing the statement
console.log('Normal statement in the event loop');

// Output
// Normal statement in the event loop
// setImmediate() function running...
// setTimeout() function running...