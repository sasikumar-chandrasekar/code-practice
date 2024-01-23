
// Question 1: Merge the two arrays and remove duplicates out of it
// const array1 = [1, 2, 3];
// const array2 = [2, 30, 1];

const array1 = [1, 2, 3];
const array2 = [2, 30, 1];
const resultOne = [...new Set([...array1, ...array2])]
console.log("resultOne", resultOne)

// Question 2: Filter given array and return only those values which are greater than 30
// Input = [10, 20, 25, 30, 45, 70, 80]

const input = [10, 20, 25, 30, 45, 70, 80]

const greaterThenNumbers = (n) => {
    const result = input.filter((number) => number > n);
    return result;
}

const n = 30;
const resultTwo = greaterThenNumbers(n)
console.log("resultTwo", resultTwo)


// Question 3: Write a JavaScript function called reverseWords that takes 
// a string as an argument and returns a new string where the words are reversed while maintaining their order
// Input = Hello World, how are you?
// Output = olleH ,dlroW woh era ?uoy

const getResult = (str) =>{
    const value = str.split(" ")
    let result = "";
    for(let i = 0; i< value.length; i++){
        if((value[i] || '').length){
            for (let index = value[i].length - 1; index >= 0 ; index--) {
                result += ( index === 0 ? (`${value[i][index]} `) : value[i][index]);
            }
        }
    }
    return result
}

const str = "Hello World, how are you?"
const resultThree = getResult(str)
console.log("resultThree", resultThree)


// Question 4: Convert this input to given output

const obj = { 
    "a": { 
    "b": { 
        "c": { 
            "d": { 
                "name": "d" 
            }, 
            "e": {}, "f": {} } } },
         "g": { "h": { "i": {} } }, 
         "j": { "k": { "name": "k", "l": { "m": {}, "n": { "name": "n" } } } } }

// const output = { "a": { "b": { "c": { "d": { "name": "d" } } } }, "j": { "k": { "name": "k", "l": { "n": { "name": "n" } } } } }

function filterObject(obj) {
    const result = {};
    for(const key in obj) {
        console.log("object", key, Object.keys(obj[key]))
        if(obj[key] && typeof obj[key] === "object" && Object.keys(obj[key]).length > 0) {
            const filtered = filterObject(obj[key]);
            if (Object.keys(filtered).length > 0) {
            result[key] = filtered;
            }
        } else if (key === 'name' || key === 'n') {
            result[key] = obj[key];
        }
    }
    return result;
  }

  const ad = [10, 20, 25, 30, 45, 70, 80]
const resultFour = filterObject(obj);

console.log("resultFour", resultFour);


// Question 5: Count and Group Data
// Assuming you have a table named orders with the following schema:
// order_id	customer_id	order_date	total_amount
// 1	101	2023-01-15	150.00
// 2	102	2023-02-02	75.50
// 3	101	2023-02-05	200.00
// 4	103	2023-03-10	50.00
// 5	102	2023-03-15	120.00
// Write an SQL query to retrieve the number of orders made by each customer and the total amount they've spent. 
// Display the results in descending order of the total amount.

// // Answer:
// SELECT customer_id,  COUNT(order_id) AS num_orders, SUM(total_amount) AS total_spent FROM orders GROUP BY customer_id ORDER BY total_spent DESC;