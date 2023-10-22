/* Write a curried function startsWith that takes a prefix string and a target string
 and returns true if the target string starts with the prefix, and false otherwise.
 */

 function startWith(str){
    return function(check) {
        return check.includes(str);
    }
 }

 console.log(startWith("world")("hello world")); // true
 console.log(startWith('ai')('OpenAI')); // Output: true
 console.log(startWith('Hi')('Hello, World!')); // Output: false

