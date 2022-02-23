const express = require('express')
const router = express.Router()
const {getGoodsDetail} = require('../routesHandle/detail')

module.exports = router.post('/getGoodsDetail', getGoodsDetail)