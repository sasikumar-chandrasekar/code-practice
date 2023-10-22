// Binary Search
// Input: arr = [1,2,3,4,5,6,7];
// target: 4

const binarySearch = (arr, start, end, target) => {
    if (end < start) {
        return "Target not in this index"
    }
    const middle = Math.trunc((start + end) / 2);

    if (arr[middle] === target) {
        return middle;
    }

    if (arr[middle] < target) {
        return binarySearch(arr, middle + 1, end, target)
    }
    return binarySearch(arr, start, middle - 1, target)
}


const arr = [1,2,3,4,5,6,7];
const start = 0;
const end = arr.length;

const target = 1
const result = binarySearch(arr, start, end, target);
console.log("binary search", result)