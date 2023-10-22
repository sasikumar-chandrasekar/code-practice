// Count the vowels in a given string
// Input: "react"
// Output: 2

const countVawelsInString = (str) => {
    const vawels = "aeiouAEIOU";
    let count = 0
    for(let i =0; i<str.length; i++){
        if(vawels.includes(str[i])){
            count++;
        }
    }
    return count
}


const str = "react";
const result = countVawelsInString(str);

console.log("result", result)
