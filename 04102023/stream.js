// Streaming in Node.js is a powerful feature that allows you to work 
// with data in chunks, making it efficient for tasks like reading and 
// writing large files, processing large datasets, or handling network 
// requests with potentially large payloads. Streams are implemented using 
// the built-in stream module in Node.js and can be categorized into four 
// types: Readable, Writable, Duplex, and Transform streams
// Readable Streams

const fs = require('fs');
const readableStream = fs.createReadStream('example.txt');

readableStream.on('data', (chunk) => {
    console.log("chunk", chunk)
  console.log(`Received ${chunk.length} bytes of data`);
});

readableStream.on('end', () => {
  console.log('Finished reading data');
});

// Writable Streams

// const fs = require('fs');
// const readableStream = fs.createReadStream('example.txt');

// readableStream.on('data', (chunk) => {
//   console.log(`Received ${chunk.length} bytes of data`);
// });

// readableStream.on('end', () => {
//   console.log('Finished reading data');
// });



// Transform Streams
// const { Transform } = require('stream');

// const myTransform = new Transform({
//   transform(chunk, encoding, callback) {
//     // Transform the data in some way
//     const transformedData = chunk.toString().toUpperCase();
//     this.push(transformedData);
//     callback();
//   }
// });

// process.stdin.pipe(myTransform).pipe(process.stdout);