const express = require('express')
const router = express.Router()
const {getCartInfo} = require('../routesHandle/cart')

module.exports = router.post('/getCartInfo', getCartInfo)
