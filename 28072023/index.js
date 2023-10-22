// // Callback Fuction

// const add = (a, b) => a + b;

// // here add is a callback function
// const result = (sum) => sum(1, 2);

// const res = result(add);

// console.log("res", res)

const user = [
    { name: "Abhishek", age: 24 },
    { name: "Dhruval", age: 22 },
    { name: "Anish", age: 26 },
    { name: "Aakash", age: 22 },
    { name: "Darshil", age: 24 },
];

const newUser = user.reduce((acc, cur) => {
    acc[cur.name] = (acc[cur.name] || 0) + 1
    return acc;
}, {})

console.log(newUser)