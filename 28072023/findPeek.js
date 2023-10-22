// Find a peak element which is not smaller than its neighbours
// Input: [1, 3, 20, 4, 1, 0]
// Output: 2

function findPeak(arr, n) {
    let start = 0;
    let end = n - 1;
   
    while (start < end) {
      let mid = Math.floor(start + (end - start) / 2);
      if (arr[mid] > arr[mid + 1]) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }

    return start;
  }
   
  const arr = [1, 3, 20, 4, 1, 0];
  const n = arr.length;

  console.log("result", findPeak(arr, n));