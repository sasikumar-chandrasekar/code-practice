// Move all zeroes to end of array
// Input :  [1, 2, 0, 4, 3, 0, 5, 0];
// Output : [1, 2, 4, 3, 5, 0, 0, 0];

// i, j;


const moveValueIntoEndoftheArray = (arr) => {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            swap(arr, i, j);
            j++;
        }
    }
    return arr;
}

const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

const arr = [1, 2, 0, 0, 4, 3, 0, 5, 0];

console.log(moveValueIntoEndoftheArray(arr))

