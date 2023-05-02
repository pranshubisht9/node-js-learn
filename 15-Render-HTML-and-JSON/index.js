
const express = require('express');

const app = express();


app.get('', (req, res) => {
    res.send('<h1> Hello, This is home page <h1> <a href="/about">Go to about page</a>');
});


app.get('/about', (req, res) => {
    res.send(`
    <input type="text" placeholder="Username"/>
    <button>Click me</button> 
    <a href="/">Go to Home page</a>
    `);
});


app.get('/help', (req, res) => {
    res.send({
        name: 'Pranshu',
        email: "Pranshu@gmail.com"
    });
});



app.listen(5000)






















