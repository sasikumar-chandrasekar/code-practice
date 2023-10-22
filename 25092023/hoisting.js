// Hoistig
// Hoisting is JavaScript's default behavior of moving all 
// declarations to the top of the current scope (script or function).

console.log(x); // Output: undefined
var x = 5;


sayHello(); // Output: "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}

console.log(y); // Output: ReferenceError: y is not defined
y = 10;