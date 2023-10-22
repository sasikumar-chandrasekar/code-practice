// Implement a curried function mapWith that takes an array and a mapping function as input and returns a new array with the mapping function applied to each element of the input array.

function double(x) {
    return x * 2;
}

function mapWith(func) {
    return function (args) {
        const res = []
        for (let i = 0; i < args.length; i++) {
            res.push(func(args[i]))
        }
        return res;
    }
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = mapWith(double);
console.log(doubledNumbers(numbers)); // Output: [2, 4, 6, 8, 10]