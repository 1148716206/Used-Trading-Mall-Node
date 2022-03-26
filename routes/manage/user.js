const express = require('express')
const router = express.Router()
const {
  manageUser,
} = require('../../routesHandle/manage/user')


module.exports = router.post('/', manageUser)





