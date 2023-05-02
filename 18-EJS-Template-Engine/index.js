//What is template engine
/* A template engine is a tool or software that helps developers to create dynamic web pages by combining HTML templates with data from a database or other sources. In simpler terms, it is a way to generate HTML code dynamically based on some data. */


const express = require('express');
const path = require('path');


const app = express();
const publicPath = path.join(__dirname, 'public');

//We need to tell to the node js about we are using ejs
app.set('view engine', 'ejs'); //step 1

app.get('', (_,res) => {
res.sendFile(`${publicPath}/index.html`)
})

app.get('/profile', (_,res) => {
    res.render('profile');
    const user = {
        name: "Pranshu",
        city: "Lucknow",
        email: "pranshu@gmail.com"
    }
    res.render('profile', {user});
    })
    

app.get('/about', (_,res) => {
    res.sendFile(`${publicPath}/about.html`);
    })

    app.get('*', (_,res) => {
        res.sendFile(`${publicPath}/404.html`)
        })
    


app.listen(5000);



