//example: console, fs, buffer(use for data processing), HTTP (useful for api calls)


//#example for non global module
const fs = require('fs');
fs.writeFileSync("hello.txt", "code with Pranshu");

//or

const fs = require('fs').writeFileSync;
fs("hello.txt", "code with Pranshu");


//#example for gloable module
console.log(78);