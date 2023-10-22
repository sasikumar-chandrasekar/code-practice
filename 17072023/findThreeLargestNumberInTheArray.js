// Find the largest three elements in an array
// Input: [10, 4, 3, 50, 23, 90]
// Output: [90, 50, 23]


const findLargeThreeNumber = (arr, arraySize) => {
    let first, second, third;
    if (arraySize < 3) {
        return "In valid input"
    }
    third = first = second = Number.MIN_VALUE;
    for (let i = 0; i < arraySize; i++) {
        if (arr[i] > first) {
            third = second;
            second = first;
            first = arr[i];
        } else if (arr[i] > second) {
            third = second;
            second = arr[i];
        } else if (arr[i] > first) {
            third = arr[i];
        }
    }
    return [third, second, first];
}

const arr = [10, 4, 3, 50, 23, 90];
const arrSize = arr.length;

console.log(findLargeThreeNumber(arr, arrSize))