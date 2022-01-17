let express = require('express')
let router = express.Router() //加载路由

const conn = require('./db') //导入db

/**
 * 用户管理
 */
//查询
router.get('/api/getUserInfo', (req, res) => {
    let sqlStr = 'select * from userinfo'
    conn.query(sqlStr, (err, results) => {
        let pager = {};
        pager.current = 1;
        pager.total = results.length;
        pager.size = 5;
        pager.count = Math.ceil(pager.total / pager.size);

        let data = results.slice((pager.current - 1) * pager.size, (pager.current - 1) * pager.size + pager.size );
        
        if(err) {
            res.json({code: 1, msg: '获取数据失败！'})
        } else {
            res.json({code: 200, msg: data})
        }
    })
})

//删除
router.post('/api/delUserInfo', (req, res) => {
    conn.query('DELETE FROM userinfo WHERE id=?', [req.body.id], (err, results) => {
        if(err) {
            res.json({code: 1, msg: '删除失败！'})
            console.log(err)
        } else {
            res.json({code: 200, msg: '删除成功！'})
        }
    })
})

//修改
router.post('/api/updateUserInfo',  (req, res) => {
    conn.query('UPDATE userinfo SET username="ass" WHERE id = 4', req.body, (err, results) => {
        if(err) {
            res.json({code: 1, msg: '新增失败!'})
        } else {
            res.json({code: 200, msg: '新增成功!'})
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
router.post('/api/insertUserMsg',  (req, res) => {
    conn.query('INSERT INTO account SET ?', req.body, (err, results) => {
        if(err) {
            res.json({code: 1, msg: '新增失败!'})
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

module.exports = router