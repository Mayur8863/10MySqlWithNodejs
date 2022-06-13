var mysql = require("mysql2");
// SET PASSWORD FOR 'root'@'localhost' = PASSWORD('manager');
// run above command to avoid acess denied
var pool = mysql.createConnection({
    host : "127.0.0.1",
    user:"root",
    password:'root',
    database: 'mayur'
});
// let sql = "SELECT * FROM prdetails;";

// pool.execute(sql,(err,result)=>{
//     if(err) console.log(err);
//     console.log(result);
// })
module.exports = pool.promise();