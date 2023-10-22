// Flatten Nested Arrays:
//     Given an array of nested arrays, write a function that flattens it into a single-level array.
//     Input: [1, [2, [3, 4], 5], 6]
//     Output: [1, 2, 3, 4, 5, 6]

function flattenArray(ary) {
    var ret = [];
    for (var i = 0; i < ary.length; i++) {
        if (Array.isArray(ary[i])) {
            ret = ret.concat(flattenArray(ary[i]));
        } else {
            ret.push(ary[i]);
        }
    }
    return ret;
}

const arr = [1, [2, [3, 4], 5], 6];

console.log("result", flattenArray());