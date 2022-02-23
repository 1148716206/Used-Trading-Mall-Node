let express = require('express')
let app = express()

const Joi = require('@hapi/joi')
const expJWT = require('express-jwt');;
const config = require('./config');


const bodyParser = require('body-parser')
const router = require('./routes/router')
const multer = require('multer')
const objMulter = multer({dest: './www/upload/'})



app.use(require('cors')()) //设置跨域访问

app.use(bodyParser.urlencoded({extended: false})) //挂载参数处理中间件(post)  application/x-www-form-urlencoded

app.use(bodyParser.json())  //处理JSON格式参数
app.use(expJWT({ secret: config.jwtKey, algorithms: ['HS256']}).unless({path: ['/api/login', '/api/register']}));

app.use('/api/register', require('./routes/register'));
app.use('/api/getGoodsInfo', require('./routes/home'));
app.use('/api/login', require('./routes/login'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/personal', require('./routes/personal'));
app.use('api/detail',require('./routes/detail'))


app.use((err, req, res, next) => {

    if (err instanceof Joi.ValidationError) {
        return res.send({
            status: 400,
            msg: [err.details[0].context.label, err.details[0].message]
        });
    }
    if (err.name === 'UnauthorizedError') {
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

app.use(objMulter.any())

app.listen(8888, (req, res) => {
    console.log('http://localhost:8888')
})
