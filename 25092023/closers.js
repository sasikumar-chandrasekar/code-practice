// Closers
// Closures refer to a fundamental and powerful concept in 
// which a function encapsulates, its surrounding state, 
// including variables and functions, even after the outer 
// function has finished executing. 

// Example
function outerFunction() {
    let outerVariable = 10;
    function innerFunction() {
        console.log(outerVariable); // innerFunction can access outerVariable
    }
    return innerFunction;
}

const closureFunc = outerFunction();
closureFunc();