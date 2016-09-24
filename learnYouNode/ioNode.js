var fs = require('fs');

//returns how many \n are in the buffer
var file = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1;

console.log(file);