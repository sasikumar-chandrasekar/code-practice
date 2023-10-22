const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// define chunkSize, chunks array
// for loop used to we itreate numbers


// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: [[1,2,3], [4,5,6], [7,8,9], [10]]

const chunkSize = 2;
const chunks = [];

for (let i = 0; i < numbers.length; i += chunkSize) {
    chunks.push(numbers.slice(i, i + chunkSize))
}

console.log("chunks", chunks);