const db = require('../db')



const searchGoods = (req, res) => {
    const sql = `SELECT * FROM goods_info WHERE goods_name LIKE '%${req.body.goods_name}%'`
    db(sql, null, result => {
        if(result) {
            // console.log(result)
            return res.send({
                status: 200,
                data: result
            })
        }
    })
}

module.exports = {searchGoods}

