// Print 1 to 100 number based on conditions

// if number diviable by 3 print hello
// if number diviable by 5 print hello world
// if number diviable by 9 print how are you!
const n3 = []
const n5 = []
const no = []
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        n3.push(`hello, ${i}`);
    } else if (i % 5 === 0) {
        n5.push(`hello world, ${i}`);
    } else {
        no.push(`non D n ${i}`)
    }
}

console.log("n3", n3)
console.log("n5", n5)
console.log("no", no)