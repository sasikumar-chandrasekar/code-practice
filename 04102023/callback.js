
// In nodejs callback is a fundamental cancept used to handle asynchronous operations. 
// They are functions that are passed as arguments to other functions and are executed 
// once the operation they are associated with is completed. Callbacks are commonly used 
// in scenarios like reading files, making HTTP requests, and handling database queries.

// Ex: Read file
const reatfile = (file, callback) => {
    setTimeout(() => {
        const content = "Hi there, this is sasikumar";
        const error = "file is not available";
        callback(error, content);
    }, 2000)
}

reatfile("index.txt", (error, result) => {
    if (error) {
        console.log("something went to wrong", error)
    } else {
        console.log("Result", result)
    }
})


// express request
// const express = require("express")

// const app = express();
// const port =4000;


// app.get('/', (req, res) => {
//     setTimeout(() => {
//       res.send('Hello, world!');
//     }, 2000);
//   });

// app.listen(port, ()=>{
//     console.log(`Server is listening at http://localhost:${port}`)
// })