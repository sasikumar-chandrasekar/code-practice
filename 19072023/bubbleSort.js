// Bubble Sort
// Input: [3, 4, 5, 2, 1, 6]
// Output: [ 1, 2, 3, 4, 5, 6 ]


const bubbleSort = (arr) => {
    let sorted = true;
    do {
        sorted = true;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                sorted = false;
            }
        }
    } while (!sorted)
    return arr;
};

const arr = [3, 4, 5, 2, 1, 6];
const result = bubbleSort(arr);
console.log("result", result);