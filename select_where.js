var mysql =require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "mydb"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    var sql = "SELECT * FROM Customers WHERE address = 'Highway37'"
    con.query(sql,function(err,results,fields){
        if(err) throw err;
        console.log(results);
    });
});