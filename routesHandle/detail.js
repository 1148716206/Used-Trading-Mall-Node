const db = require("../db")

const getGoodsDetail = (req, res) => {
    const sql = `SELECT * FROM goods_info WHERE goods_id=?`
    db(sql, req.body.goods_id, result => {
        const browseNumSql = `UPDATE goods_info SET browse_num= ${JSON.parse(JSON.stringify(result))[0].browse_num+1} WHERE goods_id=?`
        db(browseNumSql, req.body.goods_id, result => {

        })
        if (result) {
            return res.send({
                status: 200,
                data: result
            })
        }
    })

}

const getGoodsMessage = (req, res) => {
    const sql = `SELECT * FROM message_info WHERE goods_id=? order by create_time desc` 
    db(sql, req.body.goods_id, result => {
        if (result) {
            return res.send({
                status: 200,
                data: result
            })
        }
    })
}

const addMessage = (req, res) => {

    const {goods_id, username, content, create_time} = req.body
    const sql = `INSERT INTO message_info SET goods_id='${goods_id}',username='${username}', content='${content}', create_time='${create_time}'`
    db(sql, null, result => {
        if (result) {
            return res.send({
                status: 200,
                data: "留言成功！"
            })
        }
    })
}

module.exports = {getGoodsDetail, getGoodsMessage, addMessage}