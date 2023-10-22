// Find the Longest Word
// input: "The quick brown fox jumped over the lazy dog";
// output: "jumped"


const findLongestWord = (str) => {
    const words = str.split(" ");
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

const sentence = "The quick brown fox jumped over the lazy dog";
const result = findLongestWord(sentence);
console.log("result", result);
