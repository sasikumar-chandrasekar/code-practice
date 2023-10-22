/** 
 * String Data Type
 */
// const str1 = "Hello";
// const str2 = 'World';

// console.log("Concat Using (+) :" , (str1 + ' ' + str2));
// console.log("Concat Using Function :" , (str1.concat(str2)));




(async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    console.log("res", data)
})()