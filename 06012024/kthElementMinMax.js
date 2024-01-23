const findKthElementBasedMinAndMax = (arr, k) => {
    const arrayLength = arr.length
    if (arrayLength === 0) {
        console.log("Array is empty");
        return;
    }
    if (k < 1 || k > arrayLength) {
        console.log("Invalid Kth value");
        return;
    }
    arr.sort((a, b) => a - b);
    const kthMin = arr[k - 1];
    const kthMax = arr[arrayLength - k];

    console.log(`{k}th Minimum Element: ${kthMin}`);
    console.log(`{k}th Maximum Element: ${kthMax}`);
    return;
}


const arr = [5, 2, 9, 1, 7, 3];
const k = 1;

findKthElementBasedMinAndMax(arr, k);

console.log(arr);