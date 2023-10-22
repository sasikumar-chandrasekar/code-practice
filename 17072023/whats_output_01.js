let array1 = "sean".split('');
console.log("array1", array1);

let array2 = array1.reverse();
console.log("array2", array2);

let array3 = "brown".split('');
console.log("array3", array3);

array2.push(array3);
console.log("array1", array1);
console.log("array2", array2);

console.log("First array length is " + array1.length + " and surname is " + array1.slice(-1));

console.log("Second array length is " + array2.length + " and surname is " + array2.slice(-1));

// output:
// First array length is 5 and surname is n, a, e, s
// Second array length is 5 and surname is n, w, o, r, b