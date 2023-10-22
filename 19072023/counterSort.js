// Counter Sort
// Input: [2, 1, 5, 7, 6, 9, 0, 8, 2, 10]
// Output: [0, 1, 2, 2, 5, 6, 7, 8, 9, 10]

const counterSort = (arr) => {
    let large = arr.length;
    for (let l = 0; l < arr.length; l++) {
        if (arr[l] > large) {
            large = arr[l]
        }
    }
    const counter = Array(large + 1).fill(0);
    for (let number of arr) {
        counter[number]++;
    }
    const res = [];
    for (let i = 0; i < counter.length; i++) {
        res.push(...Array(counter[i]).fill(i));
    }
    return res;
}


const arr = [2, 1, 5, 7, 6, 9, 0, 8, 2, 10];
const result = counterSort(arr);
console.log("result", result);