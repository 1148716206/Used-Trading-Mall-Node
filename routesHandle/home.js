const db = require('../db');
const path = require("path")

module.exports = (req, res) => {
    const sql = 'select * from goods_info where status=1';
    const localPath = path.join(__dirname, "../upload/user_avatar/")
    let page = []
    db(sql, null, result => {
       if(result) {
           JSON.parse(JSON.stringify(result)).map(item => {
               page.push(item.goods_id)
           })
           res.send({code: 200, data: result,localPath:localPath})
       }
       // if(page.length) {
       //     for(let val of page) {
       //         const imgSQL = `SELECT goods_img FROM goods_info WHERE goods_id=${val}`
       //         db(imgSQL, null, result => {
       //             if(result) {
       //                 // res.send({code: 200, data: result,localPath:localPath})\
       //                 return res.sendFile(path.join(__dirname, "../upload/goods/"+result[0].goods_img))
       //             }
       //         })
       //     }
       // }
    })
}