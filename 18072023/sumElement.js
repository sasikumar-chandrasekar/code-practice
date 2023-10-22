// Find Subarray with given sum | Set 1 (Non-negative Numbers)
// Input: arr =[1, 4, 0, 0, 3, 10, 5], sum = 8
// Output: Sum found between indexes 1 and 3

const sumOfIndex = (arr, sum) => {
    for (let i = 0; i < arr.length; i++) {
        let currentSum = arr[i];
        if (sum === arr[i]) {
            return `Sum found at indexes ${i}`;
        } else {
            for (let j = i + 1; j < arr.length; j++) {
                currentSum = currentSum + arr[j];
                if (sum === currentSum) {
                    return `Sum found between indexes ${i} and ${j}`;
                }
            }
        }
    }
}


const arr = [2, 3, 1, 4, 6, 5];
const sum = 8;
const result = sumOfIndex(arr, sum);
console.log("result", result)