// Find Prime Numbers:
//     Write a function that takes a number as input and returns an array of all prime numbers up to that number.
//     Input: 20
//     Output: [2, 3, 5, 7, 11, 13, 17, 19]

const isPrime = (num) => {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
}

const array = [...Array(20).keys()];
console.log("arr", array)

const result = array.filter(isPrime);
console.log("result", result);