const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "Parley@75220",
    database: "firstTable"
});

con.connect((err) => {
    if (err) {
        console.log("error", err);
    } else {
        console.log("connected");
    }
});

module.exports=con;