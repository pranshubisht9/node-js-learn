const express = require('express');

const app = express();


// this get method provides route
app.get('', (req, res) => {
    console.log("Data sent by browser", req.query.name);
    //http://localhost:5000/?name=Pranshu

    res.send('Hello, This is home page '+req.query.name);
});


app.get('/about', (req, res) => {
    res.send('Hello, This is about page');
});


app.get('/help', (req, res) => {
    res.send('Hello, This is help page');
});



app.listen(5000)






















