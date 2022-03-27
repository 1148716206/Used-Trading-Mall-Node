const express = require('express')
const router = express.Router()
const {addOrder} = require('../routesHandle/order')

module.exports = router.post('/addOrder', addOrder)

