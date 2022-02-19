
//链接数据库

const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'used_mall',
    multipleStatements: true
})

module.exports = (sql, arr, callback) => {
    db.query(sql, arr, function(error, result) {
        if (error) {
            return console.log(error); 
        }
        callback(result);
    });
};