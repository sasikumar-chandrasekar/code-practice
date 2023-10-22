// Let's look at an example of how to use routing in Node.js. In this example, 
// we will create a simple web server that returns "Hello World" when a user visits the homepage. 
// First, we need to install the Express module using the following command: 
// npm install express 
// Next, we can create a file called "index.js".

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});