const express = require('express');

const con = require('./config');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    con.query("select * from users", (err,result)=> {
        if(err){
            res.send("error");
        }else{
            res.send(result);
        }
    })
})


app.post("/", (req, res) => {

    // const data = {name:"Pranshu", password: "3000", user_type:"visitor"};

    //this below line is used when i send body through postman tool ------------ line number 7

    const data = req.body;

    con.query('insert into users set ?',data, (err,result,fields)=> {
        if(err) throw console.log("error");
        res.send(result);
    })
});


app.listen(5000);