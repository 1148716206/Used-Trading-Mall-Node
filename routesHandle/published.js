const db = require("../db")

const getPublishedGoods = (req, res) => {
    const sql = `SELECT * FROM goods_info WHERE username='${req.body.username}'`
    db(sql, null, result => {
        if (result) {
            // console.log('result',result)
          return res.send({
              status: 200,
              data:result
          })
        } else {
            return res.send({
                status: 500,
                msg: "查询失败"
            })
        }
    })
}
const deletePublishedGoods = (req, res) => {
    const {goods_id} = req.body
    sql = `DELETE FROM goods_info WHERE goods_id=${goods_id}`;
    db(sql, null, (result) => {
        if (result) {
            return res.send({
                status: 200,
                msg: '删除成功!'
            });
        }
    });
};

const updatePublishedGoods = (req, res) => {
    const {goods_number,goods_id} = req.body
    sql = `UPDATE goods_info SET goods_number=${goods_number} WHERE goods_id=${goods_id}`;
    db(sql, null, (result) => {
        if (result) {
            return res.send({
                status: 200,
                msg: '商品数量修改成功!'
            });
        }
    });
};



module.exports = {getPublishedGoods,deletePublishedGoods,updatePublishedGoods}