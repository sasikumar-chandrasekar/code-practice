//  Reverse a String:
//     Write a function that takes a string as input and returns the reversed version of the string.
//         - Input: "Hello, World!"
//         - Output: "!dlroW ,olleH"

const str = "hello world!"

let result = "";

const lastIndex = str.length - 1;
for (let i = lastIndex; i >= 0; i--) {
    result += str[i];
}

console.log(result);