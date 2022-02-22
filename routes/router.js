let express = require('express')
let router = express.Router() //加载路由
const conn = require('../db') //导入db

const util = require("util")
const pathLib = require('path')
const fs = require('fs')
const multer = require('multer')
const multiparty = require('multiparty')
var upload = multer({dest: 'upload_tmp/'});


/**
 * 前台登录
 */
router.post('/login',(req,res) => {
    var Data = {
        status:400,
        msg:'用户名错误！'
    }
    console.log(req.body)
    if(req.body.username !== 'xdd'){
        // res.send(Data);
        console.log(req.body)
    }else{
        if(req.body.password !== '123456'){
            res.json({code: 500, msg:'密码错误！'})
        }else{
            res.json({code: 500, msg:'用户存在！'})
        }
    }
})


/**
 * 用户管理
 */
// (分页查询 + 模糊查询)

/*
router.post('/api/getUserInfo', (req, res) => {
    // 模糊查询sql SELECT * FROM user_info WHERE id LIKE ? OR username Like ? OR phone LIKE ?
    //模糊查询两种方法 直接在sql+ mysql.escape("%"+req.body.name+"%")
    // sql += "WHERE id LIKE" + mysql.escape("%"+req.body.name+"%")
    var params = req.body
    let sql = "SELECT * FROM `user_info`"  //查询所有数据
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
    conn.query('SELECT COUNT(*) as count FROM `user_info`', null, (err, result) => {
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
*/

//删除
router.post('/api/delUserInfo', (req, res) => {
    conn.query('DELETE FROM user_info WHERE id=?', [req.body.id], (err, results) => {
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
    conn.query('UPDATE user_info SET username="ass" WHERE id = 4', req.body, (err, results) => {
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
    let sqlStr = 'select * from order_info';
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
    conn.query('INSERT INTO user_info SET username= ?, password=123456, gender= ?, phone= ?, address= ?, permission= ?', params, (err, results) => {
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


/**
 * 上传图片
 */

/*router.post('/api/uploadGoodsImg',  upload.any(), function(req,res){
    console.log('1112')
    console.log(req.files); // 上传的文件信息

    var des_file = "./upload/" + req.files[0].originalname;

    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
            }else{
                var response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
                console.log( response );
                res.end( JSON.stringify( response ) );
            }
        });
    });
});*/
router.post('/api/uploadGoodsImg', function(req,res){
    let form = new multiparty.Form();
    //form.uploadDir="193.9.139.13:8080/cactusImage";
    var path = require('path');
    // form.uploadDir=path.resolve(__dirname,'./upload_tmp');
    form.uploadDir="http://www.cz2000.top/bs/admin/images";
    console.log('__dirname',__dirname)
    console.log('form.uploadDir',form.uploadDir)
    form.keepExtensions=true;   //是否保留后缀
    form.autoFiels=true;       //启用文件事件，并禁用部分文件事件，如果监听文件事件，则默认为true。
    form.parse(req,function(err,fields,files){  //其中fields表示你提交的表单数据对象，files表示你提交的文件对象
        if(err){
            console.log(err)
            res.json({
                status:"1",
                msg:"上传失败！"+err
            });
        }else{
            res.json({
                status:"200",
                msg:"上传成功！",
                personPicture: files.images[0].path   //存到数据库中的picture的路径（绝对路径）
            });
        }
    });

});




module.exports = router