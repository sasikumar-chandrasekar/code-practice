// Find the missing and repeating number
// Input: [7, 3, 4, 5, 5, 6, 2]
// Output: { repeatingNumber: 5, missingNumber: 1 }

function printTwoElements(arr) {
    const n = arr.length;
    const temp = Array(n).fill(0);
    let repeatingNumber = -1;
    let missingNumber = -1;

    for (let i = 0; i < n; i++) {
        temp[arr[i] - 1] += 1;
        if (temp[arr[i] - 1] > 1) {
            repeatingNumber = arr[i];
        }
    }
    for (let i = 0; i < n; i++) {
        if (temp[i] === 0) {
            missingNumber = i + 1;
            break;
        }
    }
    return {
        repeatingNumber,
        missingNumber
    }
}

const arr = [7, 3, 4, 5, 5, 6, 2];
console.log("result", printTwoElements(arr));
