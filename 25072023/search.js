const search = (arr, low, high, target) => {
    if (low > high) return -1;
    const mid = Math.trunc((low + high) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] < target) {
        return search(arr, mid + 1, high, target);
    }
    return search(arr, low, mid - 1, target)
}


const arr = [1, 2, 3, 4, 5];
const target = 5;
const size = arr.length;


const result = search(arr, 0, size - 1, target);

console.log("index", result, "value", )