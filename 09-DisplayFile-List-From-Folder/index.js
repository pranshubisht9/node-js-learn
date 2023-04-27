const { log } = require('console');
const fs = require('fs');

// fs.writeFileSync('apple.txt', 'this is apple')

const path = require('path');
const dirPath = path.join(__dirname, 'files');

for(let i=0; i<5; i++){
fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple test file")
}
console.log(dirPath);

fs.readdir(dirPath, (err, files) => {
console.log(files);
files.forEach((e) => {
console.log(e);
})
})