const express = require('express')
const router = express.Router()
const {
  manageUpdateUser
} = require('../../routesHandle/manage/updateUser')


module.exports = router.post('/', manageUpdateUser)





