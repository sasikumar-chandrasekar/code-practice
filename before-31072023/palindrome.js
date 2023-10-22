// Palindrome:
//     Write a function that takes a string as input and determines whether it is a palindrome or not (a palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward).
//         Input: "raccar"
//         Output: true

function isPalindrome(str) {
    const value = str.toLowerCase()
    for (let i = 0, j = value.length - 1; i < j; i++, j--) {
        if (value[i] !== value[j]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("raccar")); // true