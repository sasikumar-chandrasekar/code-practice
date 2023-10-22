/*
Write a curried function power that accepts a base number and 
an exponent and returns the result of raising the base to the exponent.
*/

// Exponential Function Formula
// f(x) = a'x
// a is 3
//  f(2) = 3*3
// a is 4
//  f(5) = 4*4*4*4*4



const exponent = (a) => {
    return (x) => {
        let res = 1;
        if (x === undefined) {
            x = 2;
        }
        for (let i = 1; i <= x; i++) {
            res = res * a;
        }
        return res;
    }
};

const result = exponent(4)(2);
console.log("result", result)
