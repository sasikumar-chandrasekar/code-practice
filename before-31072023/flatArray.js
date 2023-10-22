const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

arr.flat(Infinity);

console.log("arr.flat(Infinity)", arr.flat(Infinity))