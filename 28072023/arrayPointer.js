// Rearrange an array in maximum minimum form using Two Pointer Technique
// Input: [1, 2, 3, 4, 5, 6];
// Output: [6, 1, 5, 2, 4, 3]

const arr = [1, 2, 3, 4, 5, 6];
const size = arr.length;
let small = 0;
let large = size - 1;
let flag = true;
const temp = [];

for (let i = 0; i < size; i++) {
    temp[i] = arr[flag ? large-- : small++]
    flag = !flag;
}

console.log("temp", temp);