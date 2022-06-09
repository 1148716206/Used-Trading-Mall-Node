const express = require('express')
const router = express.Router()
const {
    manageRemoveGoods
} = require('../../routesHandle/manage/removeGoods')


module.exports = router.post('/', manageRemoveGoods)





