// Insertion Sort
// Input: [2, 1, 5, 7, 6, 9, 0, 8, 2, 10]
// Output: [0, 1, 2, 2, 5, 6, 7, 8, 9, 10]


const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (arr[j - 1] > arr[j]) {
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            j--;
        }
    }
    return arr;
}

const arr = [3, 4, 5, 2, 1, 6];
const result = insertionSort(arr);
console.log("result", result)