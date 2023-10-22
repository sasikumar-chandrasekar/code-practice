// binary search in sorted array
// Input: [ 5, 6, 7, 8, 9, 10 ], Search = 10
// Output: 5


/*
$ find middle index of the array
$ 
*/


const binarySearch = (arr, low, high, target) => {
    if (high < low)
        return "Not found"
    const mid = Math.trunc((low + high) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] < target) {
        return binarySearch(arr, (mid + 1), high, target);
    }
    return binarySearch(arr, low, (mid - 1), target);
}


const arr = [5, 6, 7, 8, 9, 10];
let n, key;

n = arr.length;
key = 8;

const result = binarySearch(arr, 0, n - 1, key);
console.log("result", result)