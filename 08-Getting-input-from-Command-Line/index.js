console.log(process.argv[2]);
// arg.v is the argument vectir

//first two input is fixed in argument arg

// file creation 

const fs = require('fs');


const input = process.argv;


if(input[2] == 'add'){
    fs.writeFileSync(input[3], input[4]);

}else if(input[2] == 'remove'){
fs.unlinkSync(input[3]);
}else{
console.log("invalid output");
}


// riteFileSync() is a method in Node.js that is used to write data to a file synchronously. When you use writeFileSync(), the data is written to the file and the method doesn't return until the write operation has completed.

// The writeFileSync() method takes two arguments: the first argument is the path of the file to write to, and the second argument is the data to write to the file. The data can be a string, a buffer, or a typed array.



