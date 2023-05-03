const mysql = require("mysql");


const con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "Parley@75220",
    database: "firstTable" 
});


//check connection
con.connect((err)=> {
if(err){
    console.log("error", err);
}else{
    console.log("connected");
}
});

con.query("select * from first table", (err, res)=> {
    console.log("result", res);
});