const express = require('express')
const router = express.Router()
const {getUserInfo,setUserGender,setNickName,setUserEmail,setUserAddress,setUserPhone} = require('../routesHandle/personal')


module.exports = router.post('/getUserInfo', getUserInfo)
module.exports = router.post('/setUserGender',setUserGender)
module.exports = router.post('/setNickName',setNickName)
module.exports = router.post('/setUserEmail',setUserEmail)
module.exports = router.post('/setUserAddress',setUserAddress)
module.exports = router.post('/setUserPhone',setUserPhone)




