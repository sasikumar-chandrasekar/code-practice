// Remove the duplicates in given array
// Input: [1, 2, 1, 3, 4, 5, 4, 3, 5, 5, 4, 3]
// Output: [ 1, 2, 3, 4, 5 ]

const arr = [1, 2, 1, 3, 4, 5, 4, 3, 5, 5, 4, 3];


const temp = []
for (let i = 0; i < arr.length; i++) {
    if (!temp.includes(arr[i])) {
        temp.push(arr[i])
    }
}

console.log("temp", temp)