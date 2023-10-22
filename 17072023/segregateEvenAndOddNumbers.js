// Segregate even and odd numbers
// Input: [ 1, 3, 2, 4, 7, 6, 9, 10 ]
// Output:  [2, 4, 6, 10, 7, 1, 9, 3]


const segregateEvenAndOddNumber = (arr) => {
    const arrSize = arr.length
    let j = 0;
    for (let i = -1; i < arrSize; i++) {
        if (arr[i] % 2 === 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
    return arr;
}

const arr = [1, 3, 2, 4, 7, 6, 9, 10];

console.log("Result", segregateEvenAndOddNumber(arr));