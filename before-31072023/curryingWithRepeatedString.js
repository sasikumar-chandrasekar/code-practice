// Write a curried function repeatString that takes a string and a number and returns a new string that repeats the original string for the specified number of times.

// console.log(repeatString('Hello')(3)); // Output: HelloHelloHello
// console.log(repeatString('abc')(5)); // Output: abcabcabcabcabc

// "test", 3 => testtesttest




const repeatString = (str) => {
    return (num) => {
        let string = "";
        for (let i = 1; i <= num; i++) {
            string += str;
        }
        return string;
    }
}

console.log("hello", repeatString("hello")(10));
console.log("abc", repeatString("abc")(10));
