const express = require('express')
const router = express.Router()
const {
    manageUpdateGoods
} = require('../../routesHandle/manage/updateGoods')


module.exports = router.post('/', manageUpdateGoods)





