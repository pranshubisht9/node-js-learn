const http = require('http');

//we can create server

http.createServer((req,res)=>{
    res.write("hello this is pranshu");
    res.end;
}).listen(4600);

