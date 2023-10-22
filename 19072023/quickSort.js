// Quick Sort
// Input: [1, 4, 6, 9, 5, 2, 3]
// Output: [1, 2, 3, 4, 5, 6, 9]

// pivot = get one element in the array
// define two array's name like letfArray and rightArray
// compare the each element with pivot element, if array is greater the the move to right array and it is lesser then move to left array.

const quickSort = (arr) => {
    if (arr.length <= 0) return arr;
    let pivot = arr[0];
    let letfArray = [];
    let rightArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) letfArray.push(arr[i]);
        if (arr[i] > pivot) rightArray.push(arr[i]);
    }
    return quickSort(letfArray).concat(pivot).concat(quickSort(rightArray));
}

const arr = [1, 4, 6, 9, 5, 2, 3];
const result = quickSort(arr);
console.log("result", result)
