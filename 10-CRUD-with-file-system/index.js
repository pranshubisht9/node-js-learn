const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;


//###############create file
// Firstly i create file using below line
fs.writeFileSync(filePath, 'This is a sample text file')



//#########read file
// this cause showing buffer, to solve we need to put middle parameter in readFile(); which is 'utf-8'
fs.readFile(filePath,'utf-8', (err, item)=> {
console.log(item);
})


// ##########update file 
fs.appendFile(filePath, ' and file name is apple.txt', (err) => {
    if(!err) console.log("file is updated");
})


// #############Rename file
fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
    if(!err) console.log("file name is updated");
})



//##############Delete file
fs.unlinkSync(`${dirPath}/fruit.txt`)


// What is buffer in

// a buffer is a temporary storage area for data that is being transferred from one place to another.