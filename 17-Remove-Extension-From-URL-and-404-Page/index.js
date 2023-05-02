const express = require('express');
const path = require('path');


const app = express();
const publicPath = path.join(__dirname, 'public');

app.get('', (_,res) => {
res.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (_,res) => {
    res.sendFile(`${publicPath}/about.html`);
    //with the help of sendFile we can hide url
    })

    app.get('*', (_,res) => {
        res.sendFile(`${publicPath}/404.html`)
        })
    


app.listen(5000);

// Why to remove about.html (.html) from URL?
// Because of security, We do not want to show the tech stack to the user
//separete the URL and Page
