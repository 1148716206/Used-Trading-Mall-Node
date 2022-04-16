const express = require('express')
const router = express.Router()
const {
    manageUpdateOrder
} = require('../../routesHandle/manage/updateOrder')


module.exports = router.post('/', manageUpdateOrder)





