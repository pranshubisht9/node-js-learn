const express = require('express');

const con = require('./config');

const app = express();

app.use(express.json()); // this is used for converting json format from request body.

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

    const data = {name:"Pranshu", password: "3000", user_type:"visitor"};

    con.query('insert into users set ?',data, (err,result,fields)=> {
        if(err) throw console.log("error");
        res.send(result);
    })
});



//for dynamic change we can use pathvariable

app.put("/:id", (req, res) => {

    // const data =  ["tony","0000","reader",2];
    const data =  ["tony","0000","reader",req.params.id];

    con.query('update users SET name = ?,  password =?, user_type = ?  where id = ?',data, (err,result,fields)=> {
        if(err) throw err;
        res.send(result);
    })
});



app.listen(5000);