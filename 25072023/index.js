// Input: arr= [10, 50, 30, 70, 80, 20, 90, 40], key = 30
// Output: 3

// Binary Search
const search = (arr, low, high, target) => {
    if (high < low) return -1
    const mid = Math.trunc((low + high) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] < target) {
        return search(arr, (mid + 1), high, target);
    }
    return search(arr, low, (mid - 1), target);
}

const arr = [10, 50, 30, 70, 80, 20, 90, 40];
const key = 30;
const size = arr.length - 1;

// Quick Sort
const sort = (arr) => {
    if (arr.length <= 0) return arr;
    let pivot = arr[0];
    let letfArray = [];
    let rightArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) letfArray.push(arr[i]);
        if (arr[i] > pivot) rightArray.push(arr[i]);
    }
    return sort(letfArray).concat(pivot).concat(sort(rightArray));
}
const sortedArray = sort(arr);

const result = search(sortedArray, 0, size, key);

console.log("result", result);

// Arr
// LengthOfArray
// Middle value
// 


