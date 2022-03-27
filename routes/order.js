const express = require('express')
const router = express.Router()
const {getOrder,addOrder} = require('../routesHandle/order')

module.exports = router.post('/getOrder', getOrder)
module.exports = router.post('/addOrder', addOrder)
