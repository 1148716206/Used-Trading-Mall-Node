const express = require('express')
const router = express.Router()
const {
    manageCheckGoods
} = require('../../routesHandle/manage/checkGoods')


module.exports = router.post('/', manageCheckGoods)





