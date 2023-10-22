// var arr = [1, 2, 3, 4, 5]
// for (let [key, value] of arr.entries()) {
//     console.log("key, value", key, value)
// }

// var newArrayEntry = () => {
//     console.log("arr", arr)
//     var entry = arr.pop();
//     console.log("entry", entry);
//     if (entry) {
//         // do something to the current entry...
//         setTimeout(newArrayEntry(), 0);
//     }
//     // return ""
// };

// newArrayEntry();

let n = 5; // you can take input from prompt or change the value
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);