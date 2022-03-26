const express = require('express')
const router = express.Router()
const {
  manageDeleteUser
} = require('../../routesHandle/manage/deleteUser')


module.exports = router.post('/', manageDeleteUser)





