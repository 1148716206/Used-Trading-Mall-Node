const express = require('express')
const router = express.Router()
const {
  manageInsertUser
} = require('../../routesHandle/manage/insertUser')


module.exports = router.post('/', manageInsertUser)





