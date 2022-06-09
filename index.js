let express = require('express')
let app = express()

const Joi = require('@hapi/joi')
const expJWT = require('express-jwt');
const config = require('./config');
const bodyParser = require('body-parser')
const router = require('./router')
const multer = require('multer')
const objMulter = multer({dest: './www/upload/'})

app.use(require('cors')()) //设置跨域访问

app.use(bodyParser.urlencoded({extended: false})) //挂载参数处理中间件(post)  application/x-www-form-urlencoded

app.use(bodyParser.json())  //处理JSON格式参数
app.use(expJWT({ secret: config.jwtKey, algorithms: ['HS256']}).unless({path: ['/api/login', '/api/register',
'/api/manageUser',
'/api/searchGoods',
'/api/getGoodsInfo',
'/api/detail/getGoodsMessage',
'/api/detail/getGoodsDetail',
 '/api/manageUpdateUser',
  '/api/manageInsertUser',
  '/api/manageDeleteUser',
  '/api/manageOrder',
  '/api/manageGoods',
  '/api/manageMessage',
  '/api/manageUpdateOrder',
  '/api/manageUpdateGoods',
  '/api/manageDeleteGoods',
  '/api/manageCheckGoods',
  '/api/manageRemoveGoods',
  '/upload/goods/o6WYyWtdwuZ3dozw_eQ6Fma7.png',
]}));
app.use('/',require('./router'))
app.use('/api/register', require('./routes/register'));
app.use('/api/login', require('./routes/login'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/personal', require('./routes/personal'));
app.use('/api/publish', require('./routes/publish'));
app.use('/api/published', require('./routes/published'));
app.use('/api/order', require('./routes/order'));
app.use('/api/detail',require('./routes/detail'))


app.use('/api/getGoodsInfo', require('./routes/home'));
app.use('/api/searchGoods', require('./routes/search'));
app.use('/api/manageUser',require('./routes/manage/user'))
app.use('/api/manageUpdateUser',require('./routes/manage/updateUser'))
app.use('/api/manageInsertUser',require('./routes/manage/insertUser'))
app.use('/api/manageDeleteUser',require('./routes/manage/deleteUser'))
app.use('/api/manageOrder',require('./routes/manage/order'))
app.use('/api/manageUpdateOrder',require('./routes/manage/updateOrder'))
app.use('/api/manageUpdateGoods',require('./routes/manage/updateGoods'))
app.use('/api/manageDeleteGoods',require('./routes/manage/deleteGoods'))
app.use('/api/manageMessage',require('./routes/manage/message'))
app.use('/api/manageCheckGoods',require('./routes/manage/checkGoods'))
app.use('/api/manageRemoveGoods',require('./routes/manage/removeGoods'))


app.use('/api/manageGoods',require('./routes/manage/goods'))

app.use((err, req, res, next) => {

    if (err instanceof Joi.ValidationError) {
        return res.send({
            status: 400,
            msg: [err.details[0].context.label, err.details[0].message]
        });
    }
    if (err.name === 'UnauthorizedError') {
        console.log(err)
        return res.send({
            status: 401,
            msg: 'TOKEN ERROR'
        });
    }
    res.send({
        status: 500,
        msg: err.message || err
    });
});

app.use('/', router)  //使用路由
app.use('/upload', express.static('upload'));
app.use(objMulter.any())

app.listen(8888, (req, res) => {
    console.log('http://localhost:8888')
})
