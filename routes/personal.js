const express = require('express')
const router = express.Router()
const {getUserInfo,setUserGender} = require('../routesHandle/personal')


module.exports = router.post('/getUserInfo', getUserInfo)
module.exports = router.post('/setUserGender',setUserGender)




