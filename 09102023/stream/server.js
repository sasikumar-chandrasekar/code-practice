// const fs = require('fs');
// const file = fs.createWriteStream('./big.file');

// for(let i=0; i<= 1e6; i++) {
//   file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
// }

// file.end();

// const fs = require('fs');
// const server = require('http').createServer();


// server.on('request', (req, res) => {
//   const src = fs.createReadStream('./stream/big.file');
//   src.pipe(res);
// });

// server.listen(8000).on("listening", ()=> {
//     console.log("---------listening---8000-->")
// });


// const fs = require("node:fs")

// const readFs = fs.createReadStream("./stream/big.txt")

// const writeFs = fs.createWriteStream("./stream/toobig.txt")

// readFs.on("data", (chunk) => {
//   writeFs.write(chunk, "utf-8");
// })

// readFs.on("end", () => {
//   console.log("Read process is done")
//   writeFs.end();
// })

// writeFs.on("drain", (list) => {
//   console.log("Read drain is done", list)
// })

// writeFs.on("finish", ()=>{
//   console.log("Write process is finish")
// })


// WritableStream

// const {Writable} = require("node:stream");

// const writable = new Writable({
//   write(chunk, encoding, callback){

//     callback()
//   }
// })

// process.stdin.pipe(writable)


const {Readable} = require("node:stream");

const readable = new Readable({
  read(size){
    console.log(size)
  }
})

readable.push("hello ")
readable.push("world")
readable.push("!")
readable.push(null)

readable.on("end", ()=>{
  console.log("\nread end")
})

readable.pipe(process.stdout)
