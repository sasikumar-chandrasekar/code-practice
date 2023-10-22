// Sort an array which contain 1 to n values
// Input : [2, 3, 1, 4, 6, 5]
// Output : [1, 2, 3, 4, 5, 6]

// Best approch cyclic sort

const sort = (arr, size) => {
    let i = 0;
    while (i < size) {
        let current = arr[i] - 1;
        console.log("current", current)
        if (arr[current] !== arr[i]) {
            let temp = arr[i];
            arr[i] = arr[current];
            arr[current] = temp;
        } else {
            i++;
        }
    }
    return arr;
}

const data = [2, 3, 1, 4, 6, 5];
const n = data.length;
const result = sort(data, n);

console.log("result", result);