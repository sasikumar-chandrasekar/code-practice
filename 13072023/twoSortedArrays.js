// Merge Two Arrays:
//     Given two sorted arrays, write a function to merge them into a single sorted array.
//         Input: [1, 3, 5, 7], [2, 4, 6, 8]
//         Output: [1, 2, 3, 4, 5, 6, 7, 8]

const mergeArray = (arrOne, arrTwo, al, bl, res) => {
    let i = 0, j = 0, k = 0;
    while (i < al) {
        res[k++] = arrOne[i++];
    }
    while (j < bl) {
        res[k++] = arrTwo[j++];
    }
    return res.sort();
}

const a = [1, 2, 3, 4];
const al = a.length;
const b = [6, 5, 7, 8];
const bl = b.length;
const res = new Array(al + bl);

const result = mergeArray(a, b, al, bl, res);
console.log("result", result);
