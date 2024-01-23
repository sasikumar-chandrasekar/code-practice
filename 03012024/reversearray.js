const arr = [1,2,3,4,5];

// Type 1:
const typeOneReverseArray = (arr)=>{
    const res = [...arr].reverse();
    return res;
}

const typeOneResult = typeOneReverseArray(arr);

console.log("Type One ------------>");
console.log("arr", arr);
console.log("typeOneResult", typeOneResult);


// Type 2:
const typeTwoReverseArray = (arr)=>{
    const res = [];
    for(let i = arr.length - 1; i>=0; i--){
        res.push(arr[i]);
    }
    return res;
}

const typeTwoResult = typeTwoReverseArray(arr);

// console.log('First');
// settimeout(() => console.log('Second'), 0);
// new Promise(resolve => { resolve("Third")}).then(console.log);
// console.log("Fourth")

console.log("Type Two ------------>");
console.log("arr", arr);
console.log("typeTwoResult", typeTwoResult);

// Type 3:
const typeThreeReverseArray = (arr)=>{
    const res = [...arr].reduce((acc, item)=> [item, ...acc], [])
    return res;
}

const typeThreeResult = typeThreeReverseArray(arr);

console.log("Type Three ------------>");
console.log("arr", arr);
console.log("typeThreeResult", typeThreeResult);