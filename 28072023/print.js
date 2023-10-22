
// Function to leftRotate array multiple times
function leftRotate(arr, n, k){
    /* To get the starting point of rotated array */
    let mod = k % n;
 
    // Prints the rotated array from start position
    for (let i = 0; i < n; i++){
        console.log((arr[(mod + i) % n]) + " ");
    }
 
    console.log("\n");
}
 
// Driver Code
let arr = [ 1, 3, 5, 7, 9 ];
let n = arr.length;
 
let k = 2;
// Function Call
leftRotate(arr, n, k);

k = 3;
// Function Call
leftRotate(arr, n, k);

k = 4;
// Function Call
leftRotate(arr, n, k);