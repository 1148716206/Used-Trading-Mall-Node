let express = require('express')
let router = express.Router() //加载路由

const conn = require('./db') //导入db

/**
 * 用户管理
 */
// (分页查询 + 模糊查询)

router.post('/api/getUserInfo', (req, res) => {
    // 模糊查询sql SELECT * FROM userinfo WHERE id LIKE ? OR username Like ? OR phone LIKE ?
    //模糊查询两种方法 直接在sql+ mysql.escape("%"+req.body.name+"%")
    // sql += "WHERE id LIKE" + mysql.escape("%"+req.body.name+"%")
    var params = req.body
    let sql = "SELECT * FROM `userinfo`"  //查询所有数据
    let content = []
    let isMore = false
    let total = 0
    if((params.id && params.username) ||
        (params.id && params.phone) ||
        (params.username && params.phone)
    ) {
        isMore = true
    }

    if(params.id) {
        if(isMore) {
            sql += "AND id LIKE ?"
        } else {
            sql += "WHERE id LIKE ?"
        }
        content.push("%"+params.id+"%")
    }
    if(params.username) {

        if(isMore) {
            sql += "AND username LIKE ?"
        } else {
            sql += "WHERE username LIKE ?"
        }
        content.push("%"+params.username+"%")
    }
    if(params.phone) {
        if(isMore) {
            sql += "AND phone LIKE ?"
        } else {
            sql += "WHERE phone LIKE ?"
        }
        content.push("%"+params.phone+"%")
    }
    if(params.size) {
        sql += 'limit ?,?'
        content.push((params.current - 1) * params.size, parseInt(params.size))
    }
    conn.query('SELECT COUNT(*) as count FROM `userinfo`', null, (err, result) => {
        total = JSON.parse(JSON.stringify(result))[0].count
    })

    conn.query(sql, content, (err, result) => {
        if (err) {
            res.json({code: 500, msg: '获取数据失败！'})
        } else {
            res.json({code: 200, data: result, total})
        }
    })
})

//删除
router.post('/api/delUserInfo', (req, res) => {
    conn.query('DELETE FROM userinfo WHERE id=?', [req.body.id], (err, results) => {
        if(err) {
            res.json({code: 500, msg: '删除失败！'})
            console.log(err)
        } else {
            res.json({code: 200, msg: '删除成功！'})
        }
    })
})

//修改
router.post('/api/updateUserInfo',  (req, res) => {
    var params = [req.body.username, req.body.gender, req.body.phone, req.body.address, req.body.permission]
    conn.query('UPDATE userinfo SET username="ass" WHERE id = 4', req.body, (err, results) => {
        if(err) {
            res.json({code: 500, msg: '修改失败!'})
        } else {
            res.json({code: 200, msg: '修改成功!'})
        }
    })
})

/**
 * 订单管理
 */
//查询数据
router.get('/api/getOrderInfo', (req, res) => {
    let sqlStr = 'select * from orderinfo';
    conn.query(sqlStr, (err, results) => {
        if(err) {
            res.json({code: 1, msg: '获取数据失败！'})
        } else {
            res.json({code: 200, msg: results})
        }
    })
})

//插入数据
router.post('/api/insertUserInfo',  (req, res) => {
    var params = [req.body.username, req.body.gender, req.body.phone, req.body.address, req.body.permission]
    console.log('插入数据',params)
    conn.query('INSERT INTO userInfo SET username= ?, password=123456, gender= ?, phone= ?, address= ?, permission= ?', params, (err, results) => {
        if(err) {
            res.json({code: 500, msg: '新增失败!'})
        } else {
            res.json({code: 200, msg: '新增成功!'})
        }
    })
})

/**
 * 商品管理
 */

/**
 * 留言管理
 */



/**
 * 商品图片
 */
router.get('/api/getGoodsInfo', (req, res) => {
    let sqlStr = 'select * from goods_img';
    conn.query(sqlStr, (err, results) => {
        if(err) {
            res.json({code: 200, msg: '获取数据失败！'})
        } else {
            res.json({code: 200, msg: results})
        }
    })
})


module.exports = router