const mysql= require('mysql');
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "@bcd1234",
    database:"countries",
})

module.exports=connection