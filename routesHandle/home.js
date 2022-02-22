const db = require('../db');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../config")

module.exports = (req, res) => {
    const sql = 'select * from goods_info';
    db(sql, null, result => {
       if(result) {
           res.json({code: 200, data: result})
       }

    })

}