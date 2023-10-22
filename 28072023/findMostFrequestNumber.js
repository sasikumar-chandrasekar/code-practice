// Find K most occurring elements in the given Array
// Input: [1, 2, 1, 1, 3, 2, 4, 3] k: 2
// Output: [1, 2]


const mostFrequentNumber = (arr, k, out) => {
    let counts = new Map();
    for (let num of arr) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }
    let mostFrequent = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, k);
    let numbers = mostFrequent.map(([num, _]) => num);
    for (let i = 0; i < numbers.length; i++) {
        out[i] = numbers[i];
    }
    return out;
}

const arr = [1, 2, 1, 1, 3, 2, 4, 3];
const k = 2
let ans = new Array(k).fill(0);
console.log("result", mostFrequentNumber(arr, k, ans))