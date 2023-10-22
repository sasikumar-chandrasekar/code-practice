// Check for Anagrams:
//     Write a function that takes two strings as input and determines whether they are anagrams of each other (anagrams are strings that have the same characters but in a different order).
//     Input: "listen", "silent"
//     Output: true

const anagram = (strOne, strTwo) => {
    let n1 = strOne.length;
    let n2 = strTwo.length;
    if (n1 != n2) {
        return false;
    }
    strOne.sort();
    strTwo.sort();
    for (let i = 0; i < n1; i++) {
        if (strOne[i] != strTwo[i]) {
            return false;
        }
    }
    return true;
}

const strA = "listen"
const strB = "silent"
let strOne = strA.split("");
let strTwo = strB.split("");

console.log("result", anagram(strOne, strTwo));