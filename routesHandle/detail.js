const db = require('../db')

const getGoodsDetail = (req, res) => {

  const sql = `SELECT * FROM goods_info WHERE goods_id=?`;
  db(sql, req.body.goods_id, result => {
    if(result) {
      return res.send({
        status: 200,
        data: result
      })
    }
  })


}

const getGoodsMessage = (req, res) => {
  const sql = `SELECT * FROM message_info WHERE goods_id=?`
  db(sql, req.body.goods_id, result => {
    if(result) {
      return res.send({
        status: 200,
        data: result
      })
    }
  })
}

module.exports = {getGoodsDetail,getGoodsMessage}