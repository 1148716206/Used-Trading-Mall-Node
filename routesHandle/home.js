const db = require('../db');


module.exports = (req, res) => {
    const sql = 'select * from goods_info';
    db(sql, null, result => {
       if(result) {
           res.json({code: 200, data: result})
       }

    })

}