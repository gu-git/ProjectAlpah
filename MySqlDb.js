var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "nodejsdb" //this is the command to connect a database "nodejsdb" .
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});
con.query('SELECT * FROM employees',function(err,rows){
  if(err) throw err;

  console.log('Data received from Database nodejsdb:\n');
  console.log(rows);
});
con.query(
  'UPDATE employees SET location = ? Where ID = ?',
  ["South Africa", 4],
  function (err, result) {
    if (err) throw err;

    console.log('Changed ' + result.changedRows + ' rows');
  }
);
con.end(function(err) {
  
});