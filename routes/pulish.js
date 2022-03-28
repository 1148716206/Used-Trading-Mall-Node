const express = require('express')
const router = express.Router()
const { pulishGoods,pulishGoodsImg } = require('../routesHandle/pulish')

module.exports = router.post('/pulishGoods',pulishGoods)
module.exports = router.post('/pulishGoodsImg',pulishGoodsImg)
