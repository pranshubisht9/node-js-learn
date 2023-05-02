//################# Express js######################

/* 

Express.js is a popular and lightweight web framework for building web applications in Node.js. It provides a set of features and tools for creating robust and scalable web applications and APIs with minimal code. Express.js is widely used for creating RESTful APIs and web applications, and it is known for its simplicity, flexibility, and performance.

 */

const express = require('express');

const app = express();


// this get method provides route
app.get('', (req, res) => {
    res.send('Hello, This is home page');
});


app.get('/about', (req, res) => {
    res.send('Hello, This is about page');
});


app.get('/help', (req, res) => {
    res.send('Hello, This is help page');
});



app.listen(5000)






















