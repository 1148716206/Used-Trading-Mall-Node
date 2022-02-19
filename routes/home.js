
// const conn = require("../db")
const express = require('express');
const homeHandle = require("../routesHandle/home")
const router = express.Router();


/**
 * 商品图片
 */

// router.get('/api/getGoodsInfo', (req, res) => {
//     let sqlStr = 'select * from goods_info';
//     conn.query(sqlStr, (err, results) => {
//         if(err) {
//             res.json({code: 200, msg: '获取数据失败！'})
//         } else {
//             res.json({code: 200, data: results})
//         }
//     })
// })
//


router.get('/', homeHandle);

module.exports = router;



