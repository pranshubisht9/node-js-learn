const http = require('http');

//we can create server

// http.createServer((req,res)=>{
//     res.write("<h1>hello this is pranshu</h1>");
//     res.end;
// }).listen(4501);

function dataController(req, res){
        res.write("<h1>hello, this is pranshu</h1>");
    res.end;
}


http.createServer(dataController).listen(4502);



