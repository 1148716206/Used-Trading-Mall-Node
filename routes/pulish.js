const express = require('express')
const router = express.Router()
const { pulishGoods } = require('../routesHandle/pulish')

module.exports = router.post('/pulishGoods',pulishGoods)
