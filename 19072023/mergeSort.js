// Counter Sort
// Input: [1, 3, 6, 5, 4, 2]
// Output: [1, 2, 3, 4, 5, 6]

const mergeSort = (array) => {
    let arr = [...array];
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    let partArr = arr.splice(0, mid);
    partArr = mergeSort(partArr);
    arr = mergeSort(arr);
    let wholeArray = [];
    while (arr.length !== 0 && partArr.length !== 0) {
        if (arr[0] < partArr[0]) {
            wholeArray.push(arr[0]);
            arr.shift();
        } else {
            wholeArray.push(partArr[0]);
            partArr.shift();
        }
    }
    return wholeArray.concat(arr).concat(partArr);
}


const arr = [1, 3, 6, 5, 4, 2];
const result = mergeSort(arr);
console.log("result", result);