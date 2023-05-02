//that middleware which works on single routes, group of route, same middleware for all routes

// in last 20th chap, Application level middleware
// App lvl middlware, it applies on whole application routes

// but route level middleware apply on one routes, group of routes or all routes.

const express = require('express');
const app = express();
const reqFilter = require('./middleware')
const route = express.Router();

/* const reqFilter = (req,res,next) => {
    if(!req.query.age){
        res.send("Please provide age")
    }else if(req.query.age<18){
        res.send("You are under age")
    }
    else{
        next();
    }
}
 */

route.use(reqFilter);

app.get('/', (req,res) => {
    res.send('Welcome to home Page');
})

app.get('/users', (req,res) => {
    res.send('Welcome to Users Page');
})

app.get('/about',reqFilter, (req,res) => {    // Put filter only in all users router. this is the example of single wala middleware on single route

    res.send('Welcome to About Page');
})

app.get('/contact', (req,res) => {
    res.send('Welcome to Contact Page');
})


app.use('/', route);


app.listen(5005);
