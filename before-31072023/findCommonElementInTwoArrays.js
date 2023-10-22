// Given two arrays, write a function that finds the common elements between them and returns them as a new array.
// Input: [1, 2, 3, 4, 5], [4, 5, 6, 7]
// Output: [4, 5]

const findCommanElement = (arrOne, arrTwo) => {
    const result = [];
    let largeArray = arrOne;
    let smallArray = arrTwo;
    if (arrOne.length > arrTwo.length) {
        largeArray = arrOne;
        smallArray = arrTwo;
    }
    if (arrOne.length < arrTwo.length) {
        largeArray = arrTwo;
        smallArray = arrOne;
    }
    for (let i = 0; i < largeArray.length; i++) {
        const element = largeArray[i];
        if (smallArray.includes(element)) {
            result.push(element);
        }
    }
    return [...new Set(result)];
}

const result = findCommanElement([0, 1, 2, 3, 4,5,5, 5], [4, 5, 6,5, 7, 8, 9,0,5]);

console.log("result", result);
