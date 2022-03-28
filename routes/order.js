const express = require('express')
const router = express.Router()
const {getOrder,addOrder,deleteOrder} = require('../routesHandle/order')

module.exports = router.post('/getOrder', getOrder)
module.exports = router.post('/addOrder', addOrder)
module.exports = router.post('/deleteOrder', deleteOrder)
