// Find the Missing Number
// Input: [1, 2, 4, 5, 6, 7, 8, 9]
// Output: 3

const findMissingNumber = (arr, n) => {
    const temp = [];

    for (let i = 0; i <= n; i++) {
        temp[i] = 0;
    }

    for (let i = 0; i < n; i++) {
        temp[arr[i] - 1] = 1;
    }

    let ans = undefined;

    for (let i = 0; i < n; i++) {
        if (temp[i] === 0) {
            ans = i + 1
            return ans
        }
    }
}


const arr = [1, 2, 4, 5, 6, 7, 8, 9];
const length = arr.length;
console.log("------>", findMissingNumber(arr, length))