const express = require('express')
const router = express.Router()
const {
  manageOrder,
} = require('../../routesHandle/manage/order')


module.exports = router.post('/', manageOrder)





