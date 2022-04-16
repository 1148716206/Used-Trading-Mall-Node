const express = require('express')
const router = express.Router()
const {
    manageDeleteGoods
} = require('../../routesHandle/manage/deleteGoods')


module.exports = router.post('/', manageDeleteGoods)





