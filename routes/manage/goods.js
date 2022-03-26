const express = require('express')
const router = express.Router()
const {
  manageGoods,
} = require('../../routesHandle/manage/goods')


module.exports = router.post('/', manageGoods)





