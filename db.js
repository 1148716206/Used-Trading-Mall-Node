
//链接数据库

const mysql = require('mysql')
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'used_mall',
    multipleStatements: true
})

conn.connect()
module.exports = conn