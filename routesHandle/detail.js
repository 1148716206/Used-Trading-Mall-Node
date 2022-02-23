const db = require('../db')

const getGoodsDetail = (req, res) => {
  const sql = `SELECT * FROM goods_info WHERE id=?`;
  db(sql, req.body.id, result => {
    if(result) {
      return res.send({
        status: 200,
        data: result
      })
    }
  })
}

module.exports = {getGoodsDetail}