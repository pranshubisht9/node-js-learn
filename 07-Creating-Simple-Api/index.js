const data = require('./data')
const http = require('http');
//require is a keyword or a function used ti load and use external modules or libraries in a program


//createServer() is a methid i nnodejs that is used to create an HTTP server. When we create an HTTP server. When we create create an HTTP server using http.createServer(), the servers listen for incoming HTTP requests on a specified port and send back HTTP response to these request
http.createServer((req, res)=> {

    res.writeHead(200, {'Content-Type':'application\json'});
    //writeHead() is a method in nodejs that is used set the HTTP response headers for an HTTP response



    
    res.write(JSON.stringify(data))
    //this write() is a method in node js that is used to write data to the HTTP response body.
res.end();
}).listen(5000);