
const findMaxAndMin = (arr) =>{

    const arrayLength = arr.length;
    if(arrayLength === 0) {
        console.log("Array is Empty");
        return;
    }

    let max = arr[0];
    let min = arr[0];
    for(let i =0; i < arrayLength; i++){
        if(arr[i]> max){
            max=arr[i];
        }
        if(arr[i]< min){
            min =arr[i];
        }
    }

    console.log("Maximum Element:", max)
    console.log("Minimum Element:", min)
}

const numbers = [5, 2, 9, 1, 7, 3];

findMaxAndMin(numbers);