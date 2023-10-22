// Find a array inside the min and max value
// Input: arr =[3, 7, 0, 4, 2, 1, 6, 5];
// Output: [0,7]


const findMinMaxValue = (arr) => {
    if (!arr?.length) {
        return [0, 0]
    }
    let minValue = arr[0];
    let maxValue = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        } else if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return [minValue, maxValue]
}

const arr = [3, 7, 0, 4, 2, 1, 6, 5];
const result = findMinMaxValue(arr);
console.log("result", result);
