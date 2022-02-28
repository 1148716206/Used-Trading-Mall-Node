const express = require('express')
const router = express.Router()
const {getGoodsDetail,getGoodsMessage} = require('../routesHandle/detail')

module.exports = router.post('/getGoodsDetail', getGoodsDetail)
module.exports = router.post('/getGoodsMessage', getGoodsMessage)