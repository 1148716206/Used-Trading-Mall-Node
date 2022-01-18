let express = require('express')
const bodyParser = require('body-parser')
let app = express()
const router = require('./router')
const util = require("util")
const pathLib = require('path')
const fs = require('fs')
const multer = require('multer')
const objMulter = multer({dest: './www/upload/'})

app.use(require('cors')()) //设置跨域访问

app.use(bodyParser.urlencoded({extended: false})) //挂载参数处理中间件(post)

app.use(bodyParser.json())  //处理JSON格式参数

app.use('/', router)  //使用路由

app.use(objMulter.any())

app.listen(3000, (req, res) => {
    console.log('http://localhost:3000')
})
