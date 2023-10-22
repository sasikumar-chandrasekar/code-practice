

function countArrayElement(array) {
    const counts = new Map();
    for (const element of array) {
        if (counts.has(element)) {
            const count = counts.get(element);
            counts.set(element, count + 1);
        } else {
            counts.set(element, 1);
        }
    }

    const sortKey = Array.from(counts).sort((a, b) => b[0] - a[0]);
    const sort = sortKey.sort((a, b) => b[1] - a[1]);
    const sortMap = new Map(sort);
    return sortMap;
}

const arr = [11, 2, 2, 2, 3, 3, 3, 5, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 7, 7];
const countArray = countArrayElement(arr);

console.log("countArray", countArray);