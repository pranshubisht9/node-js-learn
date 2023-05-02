const express = require('express');
const path = require('path');


const app = express();
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs'); //step 1

app.get('', (_,res) => {
res.sendFile(`${publicPath}/index.html`)
})

app.get('/profile', (_,res) => {
    res.render('profile');
    const user = {
        name: "Pranshu",
        city: "Lucknow",
        email: "pranshu@gmail.com",
        //this skills element print in profile.ejs
        skills: ["java", "c++", "js", "hibernate"]
    }
    res.render('profile', {user});
    })
    

app.get('/about', (_,res) => {
    res.sendFile(`${publicPath}/about.html`);
    })

        app.get('/login', (_,res) => {
            res.render('login');
            })


            app.get('*', (_,res) => {
                res.sendFile(`${publicPath}/404.html`)
                })


app.listen(5000);



