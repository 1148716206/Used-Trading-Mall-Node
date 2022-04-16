const express = require('express')
const router = express.Router()
const {
  manageMessage,
} = require('../../routesHandle/manage/message')


module.exports = router.post('/', manageMessage)





