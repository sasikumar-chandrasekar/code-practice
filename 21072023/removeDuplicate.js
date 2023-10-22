// Remove Duplicates:
//   Given an array, write a function that removes any duplicate elements and returns the resulting array.
//   Input: [1, 2, 3, 2, 4, 5, 6, 4]
//   Output: [1, 2, 3, 4, 5, 6]

function removeDuplicates(arr) {
    let unique = [];
    for (i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

const arr = [1, 2, 3, 3, 4, 2, 4, 5, 6, 4];
console.log("result", removeDuplicates(arr));