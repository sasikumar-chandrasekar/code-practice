// Find a prime numbar
// Input: 97
// Output: true

function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0) return false; 
    return num > 1;
}

const result = isPrime(97);

console.log('result', result);