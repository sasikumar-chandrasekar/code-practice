// Reversal algorithm for Array rotation

// Input: [1, 2, 3, 4, 5, 6, 7], d = 2
// Output: 3, 4, 5, 6, 7, 1, 2

const arr = [1, 2, 3, 4, 5, 6, 7];
// const newArr = [];
const d = 2
const j = 0
for (let i = 0; i < arr.length; i++) {
    if (i > d) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp;
    }
}

console.log("newArr", arr)