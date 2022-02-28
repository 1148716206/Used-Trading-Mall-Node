const db = require("../db")
const pulishGoods = (req, res) => {
    const sql = `INSERT INTO goods_info SET  goods_name='${req.body.goods_name}',username='${req.body.username}', quality='${req.body.quality}', goods_img=null,goods_number='${req.body.goods_number}',goods_desc= '${req.body.goods_desc}', old_price= '${req.body.old_price}', new_price= '${req.body.new_price}'`

    db(sql, null, result => {
        if (result) {
            return res.send({
                status: 200,
                msg: "发布成功"
            })
        } else {
            return res.send({
                status: 500,
                msg: "发布失败"
            })
        }
    })
}

module.exports = {pulishGoods}