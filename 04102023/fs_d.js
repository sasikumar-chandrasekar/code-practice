const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '/test1');
fs.mkdirSync(dirPath, (error, res)=>{
    console.log("error", error)
    console.log("res", res)
});

