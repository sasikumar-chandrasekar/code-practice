Reorder
Input: [10, 11, 12], index = [1, 0, 2]
Output: [11, 10, 12], index = [0, 1, 2]

const reorder = (arr, index, n) => {
    const temp = [...Array(n)];

    for (let i = 0; i < n; i++) {
        temp[index[i]] = arr[i]
    }
    
    for (let i = 0; i < n; i++) {
        arr[i] = temp[i];
        index[i] = i;
    }
}

const arr = [10, 11, 12]
const index = [1, 0, 2]
const size = arr.length;

const result = reorder(arr, index, size);
console.log("result", result)