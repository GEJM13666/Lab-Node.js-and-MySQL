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

    var sql = "INSERT INTO Customers (name,address) VALUES ('Jason','Highway 37'),('Gun','72 Prachawiwat'),('Fluke','Trang'),('Ball','Nakhon'),('Tah','Trang')"
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("Customer created");
    });
});