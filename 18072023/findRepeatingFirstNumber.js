// Find the first repeating element in an array of integers
// Input:  [2, 2, 4, 3, 5, 6, 7]
// Output: 2

const findRepeatingFirstNumber = (arr, size) => {
    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {
                return arr[i]
            }
        }
    }
}

const arr = [2, 2, 4, 3, 5, 6, 7];
const size = arr.length;
console.log("result", findRepeatingFirstNumber(arr, size));