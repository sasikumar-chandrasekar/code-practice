// Find Second largest element in an array
// Input: [10, 4, 3, 50, 23, 90]
// Output: The second largest element is 50

const findlargetNumber = (arr) => {
    if (arr.length < 1) {
        return "In valid input"
    }
    let largest = second = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        second = largest;
        largest = arr[i];
      } else if (arr[i] > second && arr[i] !== largest) {
        second = arr[i];
      }
    }
    return `The second largest element is ${second}`;
}

const arr = [10, 4, 3, -90, -50, 23, -90];

console.log(findlargetNumber(arr));