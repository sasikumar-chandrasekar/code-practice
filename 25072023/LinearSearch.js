// Linear Search
// Input: arr= [10, 50, 30, 70, 80, 20, 90, 40], key = 30
// Output: 3


const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}


const arr = [10, 50, 30, 70, 80, 20, 90, 40];
const key = 100;
const result = linearSearch(arr, key);

console.log("result", result);