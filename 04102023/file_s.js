/*
	//Every file comes with a set of details that we can inspect using Node.js. 
    In particular, using the stat() method provided by the fs module.
    
    You call it passing a file path, and once Node.js gets the file details it 
    will call the callback function you pass, with 2 parameters: an error message, 
    and the file stats:
*/

const fs = require('fs');

// The simplest way to READ A FILE in Node.js is to use the 
// fs.readFile() method, passing it the file path, encoding and a 
// callback function that will be called with the file data 
// (and the error):
fs.readFile('/test.txt', 'utf8', (err, data) => {
    console.log("----err------->", err)
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// The easiest way to WRITE TO FILES in Node.js is to use the 
// fs.writeFile() API.

// const content = 'Some content!';
// fs.writeFile('/Users/joe/test.txt', content, err => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });

// fs.stat('/Users/joe/test.txt', (err, stats) => {
//   if (err) {
//     console.error(err);
//   }
//   // we have access to the file stats in `stats`
// });

// Node.js also provides a sync method, which blocks the thread until the 
// file stats are ready:

// try {
//   const stats = fs.statSync('/Users/joe/test.txt');
// } catch (err) {
//   console.error(err);
// }

/*
 // The file information is included in the stats variable. 
 	+ if the file is a directory or a file, using stats.isFile() 
    and stats.isDirectory()
    
	+ if the file is a symbolic link using stats.isSymbolicLink()
	
    + The file size in bytes using stats.size
*/