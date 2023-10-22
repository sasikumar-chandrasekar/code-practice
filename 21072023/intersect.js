// Find Common Elements:
//    Given two arrays, write a function that finds the common elements between them and returns them as a new array.
//     Input: [1, 2, 3, 4, 5], [4, 5, 6, 7]
//     Output: [4, 5]

const findCommonElement = (a, b) => {
    const result = [];
    const al = a.length;
    const bl = b.length;
    for (let i = 0; i < al; ++i) {
        const ai = a[i];
        for (let j = 0; j < bl; ++j) {
            if (ai === b[j]) {
                result.push(ai);
                break;
            }
        }
    }
    return result;
}

console.log("result", findCommonElement([1, 2, 3, 4, 5], [4, 5, 6, 7]))