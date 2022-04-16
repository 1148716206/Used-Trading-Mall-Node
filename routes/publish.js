const express = require('express')
const router = express.Router()
const { publishGoods,publishGoodsImg } = require('../routesHandle/publish')

module.exports = router.post('/publishGoods',publishGoods)
module.exports = router.post('/publishGoodsImg',publishGoodsImg)
