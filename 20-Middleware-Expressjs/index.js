/* 
Middleware:

In web development, middleware refers to a software layer that sits between the client and the server, and handles tasks such as request/response processing, authentication, caching, logging, and error handling. Middleware can be thought of as a pipeline that requests must pass through on their way to the server.

-- With the help of middleware , we can access request and response and modify. To checking authentication etc.


if we have 100-200 routes.. it will be very hard to authenticate 100 times we have to write 100 times same code
with the use of middleware it will be easy.


*/

const express = require('express');
const app = express();


const reqFilter = (req,res,next) => {
    if(!req.query.age){
        res.send("Please provide age")
    }else if(req.query.age<18){
        res.send("You are under age")
    }
    else{
        next();
    }
}


app.use(reqFilter);

app.get('/', (req,res) => {
    res.send('Welcome to home Page');
})

app.get('/users', (req,res) => {
    res.send('Welcome to Users Page');
})
app.listen(5000);

//Middleware Types
/* 
--Application-level middleware
--Router-level middleware
--Error-handling middleware
--Built-in middleware
---Third party middleware

 */