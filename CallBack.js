var fsystem = require("fs");

var dataValue = fsystem.readFileSync('input.txt');

console.log(dataValue .toString());
console.log("End of Program ");