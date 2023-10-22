// Find Missing Number:
//  Given an array of numbers from 1 to N, where one number is missing, write a function to find the missing number.
//     Input: [1, 2, 3, 5, 6, 7, 8]
//     Output: 4


const findMissingNumber = (arr, N) => {
    let i;
    let temp = [];
    for (i = 0; i <= N; i++) {
        temp[i] = 0;
    }

    for (i = 0; i < N; i++) {
        temp[arr[i] - 1] = 1;
    }

    let answer = 0;
    for (i = 0; i <= N; i++) {
        if (temp[i] == 0)
            answer = i + 1;
    }
    return answer;
}

let arr = [1, 2, 3, 5, 6, 7, 8];
let n = arr.length;

console.log("result", findMissingNumber(arr, n));
