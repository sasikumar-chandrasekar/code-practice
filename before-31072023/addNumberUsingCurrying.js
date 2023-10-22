// const addNumber = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c;
//         }
//     }
// }

function addNumber(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

const result = addNumber(1)(2)(3);
console.log("result", result)