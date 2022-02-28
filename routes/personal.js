const express = require('express')
const router = express.Router()
const {
    getUserInfo,
    getAvatar,
    setUserGender,
    setNickName,
    setUserEmail,
    setUserAddress,
    setUserPhone,
    setUserAvatar
} = require('../routesHandle/personal')


module.exports = router.post('/getUserInfo', getUserInfo)
module.exports = router.post('/getAvatar', getAvatar)
module.exports = router.post('/setUserGender',setUserGender)
module.exports = router.post('/setNickName',setNickName)
module.exports = router.post('/setUserEmail',setUserEmail)
module.exports = router.post('/setUserAddress',setUserAddress)
module.exports = router.post('/setUserPhone',setUserPhone)
module.exports = router.post('/setUserAvatar',setUserAvatar)




