const db = require('../db');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../config")

module.exports = (req, res) => {
    const sql = 'select * from goods_info';
    db(sql, null, result => {
        console.log(result)
        if(result) {
            console.log('ok')
        }
       if(result) {
           res.json({code: 200, data: result})
       }

    })

}