var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'mysql4205.cp.blacknight.com',
    user     : 'u1459480_study',
    password : 'hT6RFxgd',
    database : 'db1459480_SamAJ'
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
