const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;


fs.writeFileSync(`${path}`, 'This is a sample text file')
// fs.readFile(filePath, (err, item)=> {
// console.log('vgbhn');
// })
