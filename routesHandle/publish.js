const db = require("../db")
const multiparty = require("multiparty")
const path = require("path")

const publishGoods = (req, res) => {
    const sql = `UPDATE  goods_info SET goods_name='${req.body.goods_name}',username='${req.body.username}', quality=${req.body.quality},goods_number=${req.body.goods_number},goods_desc= '${req.body.goods_desc}', old_price= ${req.body.old_price}, new_price= ${req.body.new_price},create_time='${req.body.create_time}',browse_num=0 WHERE goods_id=${req.body.goods_id}`
    db(sql, null, result => {
        if (result) {
            // console.log('result',result)
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

const publishGoodsImg = (req, res) => {

    let form = new multiparty.Form()
    //form.uploadDir="193.9.139.13:8080/cactusImage";

    form.uploadDir = path.resolve(__dirname, "../upload/goods")
    // form.uploadDir = "http://www.cz2000.top/bs/admin/images"
    form.keepExtensions = true   //是否保留后缀
    form.autoFiels = true       //启用文件事件，并禁用部分文件事件，如果监听文件事件，则默认为true。

    form.parse(req, function (err, fields, files) {  //其中fields表示你提交的表单数据对象，files表示你提交的文件对象
        if (err) {
            return res.send({
                status: 500,
                msg: "上传失败！" + err
            })
        } else {
            const goods_img = files.images[0].path.slice(-28)
            const sql = `INSERT INTO goods_info SET goods_img='${goods_img}'`
            db(sql, null, result => {
                if (result) {
                    const goodsId= result.insertId
                    const imgSQL = `SELECT goods_img FROM goods_info WHERE goods_id=${goodsId}`
                    db(imgSQL, null, result => {
                        var options = {
                            headers: {
                                'goods_id': goodsId,
                            }
                        };

                        return res.sendFile(path.join(__dirname, "../upload/goods/"+result[0].goods_img),options)

                    })
                   /* const imgId = `SELECT goods_id FROM goods_info WHERE goods_img='${goods_img}'`
                    db(imgId, null, result => {
                        console.log(JSON.parse(JSON.stringify(result))[0].goods_id)

                        return res.send({
                            goods_id:JSON.parse(JSON.stringify(result))[0].goods_id
                        })

                    })*/
                }
            })
        }
    })

}

module.exports = {publishGoods,publishGoodsImg}